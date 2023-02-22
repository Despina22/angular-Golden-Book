import { BaseEntityForPostBookAndJob } from './base-entity1.model';

export interface Book extends BaseEntityForPostBookAndJob {
  author: string;
  numberOfStars: number;
  category: string;
}
