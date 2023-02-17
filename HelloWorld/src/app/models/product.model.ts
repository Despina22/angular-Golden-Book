import { BaseEntity } from './base/baseEntity.model';
export class Product implements BaseEntity {
  constructor(
    readonly id: number,
    readonly title: string,
    readonly price: number,
    readonly description: string
  ) {}

  getTitle(): string {
    return this.title;
  }

  getPrice(): number {
    return this.price;
  }

  getDescription(): string {
    return this.description;
  }
}
