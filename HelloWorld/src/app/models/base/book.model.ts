import { BaseEntityForPostBookAndJob } from './baseEntity1.model';

export interface Book extends BaseEntityForPostBookAndJob {
  author: string;
  numberOfStars: number;
  category: string;
}
