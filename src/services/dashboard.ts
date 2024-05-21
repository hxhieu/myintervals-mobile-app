import dayjs from 'dayjs';
import { Time } from '../api/Time';
import { DATE_FORMAT } from './const';
import { executeApi } from './api-wrapper';
import { GetTimeResponse, TimeRecord } from '../models/GetTimeResponse';
import { atom, useAtom } from 'jotai';

const TIME_RECORD_TIME_OUT = 30000; // Invalid the cache after
const DEFAULT_PAST_DATE = new Date(1, 1, 1900);

interface DashboardServiceHook {
  setWeek(weekStart?: string): Promise<void>;
  clearWeek(): void;
  weekRecords: TimeRecord[];
}

const weekStartStore = atom<string>('');
const weekRecordStore = atom<TimeRecord[]>([]);
const weekRecordLastFetchStore = atom<Date>(DEFAULT_PAST_DATE);

const fetchTime = async (start: string, end: string): Promise<TimeRecord[]> => {
  const res = await executeApi<GetTimeResponse>(Time, 'timeList', {
    activeonly: true,
    datebegin: start,
    dateend: end,
  });
  return (res?.time || []).map((x) => ({
    ...x,
    // Map day of week
    weekDay: dayjs(x.date).day(),
  }));
};

const useDashboard = (): DashboardServiceHook => {
  const [weekRecords, setWeekRecords] = useAtom(weekRecordStore);
  const [lastFetch, setLastFetch] = useAtom(weekRecordLastFetchStore);
  const [weekStart, setWeekStart] = useAtom(weekStartStore);

  const setWeek = async (start?: string) => {
    // Work out the dates range
    const date = dayjs(start, DATE_FORMAT);
    const startDate = date.isValid()
      ? date.startOf('week')
      : dayjs().startOf('week');
    const begin = startDate.format(DATE_FORMAT);

    // Still have a valid cache
    if (
      begin === weekStart &&
      new Date().getTime() - lastFetch.getTime() < TIME_RECORD_TIME_OUT
    ) {
      return;
    }

    console.log('fetching dashboard...');

    const records = await fetchTime(
      begin,
      startDate.add(7, 'day').format(DATE_FORMAT),
    );

    // Update the state
    setWeekStart(begin);
    setWeekRecords(records);
    setLastFetch(new Date());
  };

  const clearWeek = () => {
    setWeekStart('');
    setWeekRecords([]);
    setLastFetch(DEFAULT_PAST_DATE);
  };

  return {
    setWeek,
    clearWeek,
    weekRecords,
  };
};

export { useDashboard };
