import { MiTime } from '../api/data-contracts';

export interface TimeRecord extends MiTime {
  weekDay: number;
  weekDayName: string;
  canBill: boolean;
}

export interface GetTimeResponse {
  time: TimeRecord[];
  count: number;
}
