import { MiTime } from '../api/data-contracts';

type WeekDay = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface TimeRecord extends MiTime {
  weekDay: WeekDay;
}

export interface GetTimeResponse {
  time: TimeRecord[];
  count: number;
}
