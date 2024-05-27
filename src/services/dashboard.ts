import dayjs from 'dayjs';
import { Time } from '../api/Time';
import { DATE_FORMAT } from './const';
import { executeApi } from './api-wrapper';
import { GetTimeResponse, TimeRecord } from '../models/GetTimeResponse';
import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';
import { MiTimeListParams } from '../api/data-contracts';

const TIME_RECORD_TIME_OUT = 30000; // Invalid the cache after
const DEFAULT_PAST_DATE = new Date(1900, 1, 1);

interface DashboardServiceHook {
  loading: boolean;
  prepareDashboard(setDate?: string, force?: boolean): Promise<void>;
  clearDashboard(): void;
  weekRecords: TimeRecord[];
  weekStart?: string;
}

let lastFetch = new Date(1900, 1, 1);

const weekStartStore = atom<string>('');
const weekRecordStore = atom<TimeRecord[]>([]);
const loadingStore = atom<boolean>(false);

const fetchTime = async (start: string, end: string): Promise<TimeRecord[]> => {
  const res = await executeApi<GetTimeResponse, MiTimeListParams>(
    Time,
    'timeList',
    {
      activeonly: true,
      datebegin: start,
      dateend: end,
      sortdir: 'asc',
      sortfield: 't.date',
      // Required, otherwise it only returns a small set of data
      limit: 140,
    },
  );
  return (res?.time || []).map((x) => ({
    ...x,
    weekDay: dayjs(x.date).weekday(),
    weekDayName: dayjs(x.date).format('ddd'),
    canBill: (x.billable as unknown) === 't',
  }));
};

const useDashboard = (): DashboardServiceHook => {
  const [weekRecords, setWeekRecords] = useAtom(weekRecordStore);
  const [weekStart, setWeekStart] = useAtom(weekStartStore);
  const [loading, setLoading] = useAtom(loadingStore);

  // Refresh dashboard records
  useEffect(() => {
    const begin = dayjs(weekStart);

    if (
      !begin.isValid() ||
      new Date().getTime() - lastFetch.getTime() < TIME_RECORD_TIME_OUT
    ) {
      return;
    }

    lastFetch = new Date();
    setLoading(true);

    fetchTime(
      begin.format(DATE_FORMAT),
      begin.add(7, 'day').format(DATE_FORMAT),
    )
      .then((records: TimeRecord[]) => {
        setWeekRecords(records);
      })
      .finally(() => {
        setLoading(false);
        console.log(`fetched week records: ${weekStart}`);
      });
  }, [weekStart, lastFetch]);

  const prepareDashboard = async (setDate?: string, force?: boolean) => {
    console.log('prepareDashboard');
    const date = dayjs(setDate ?? weekStart, DATE_FORMAT);
    const startDate = date.isValid()
      ? date.startOf('week')
      : dayjs().startOf('week');
    // Update the state
    setWeekStart(startDate.format(DATE_FORMAT));
    if (force) {
      lastFetch = DEFAULT_PAST_DATE;
    }
  };

  const clearDashboard = () => {
    setWeekStart('');
    setWeekRecords([]);
    lastFetch = DEFAULT_PAST_DATE;
  };

  return {
    loading,
    prepareDashboard,
    clearDashboard,
    weekRecords,
    weekStart,
  };
};

export { useDashboard };
