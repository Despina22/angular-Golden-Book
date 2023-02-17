import { BaseEntityForPostBookAndJob } from './baseEntity1.model';

export interface Job extends BaseEntityForPostBookAndJob {
  workHours: number;
  pricePerHour: number;
}
