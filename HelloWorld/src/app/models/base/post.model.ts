import { BaseEntityForPostBookAndJob } from './baseEntity1.model';

export interface Post extends BaseEntityForPostBookAndJob {
  numberOfLikes: number;
}
