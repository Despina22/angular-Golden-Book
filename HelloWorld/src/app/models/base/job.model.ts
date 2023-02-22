import { BaseEntityForPostBookAndJob } from './baseEntity1.model';

export class Job implements BaseEntityForPostBookAndJob {
  id: number;
  title: string;
  description: string;
  workHours: number;
  pricePerHour: number;
  salary: number;

  constructor(
    id: number,
    title: string,
    description: string,
    workHours: number,
    pricePerHour: number
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.workHours = workHours;
    this.pricePerHour = pricePerHour;
    this.salary = this.getSalary();
  }

  getSalary(): number {
    return this.workHours * this.pricePerHour;
  }
}
