import { BaseEntityForPostBookAndJob } from './baseEntity1.model';

export class Job implements BaseEntityForPostBookAndJob {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public workHours: number,
    public pricePerHour: number
  ) {}

  getSalary(): number {
    return this.workHours * this.pricePerHour;
  }
}
