import { BaseEntityForPostBookAndJob } from './base-entity1.model';

export interface Post extends BaseEntityForPostBookAndJob {
  numberOfLikes: number;
}
