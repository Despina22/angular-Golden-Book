import { BaseEntity } from './base/base-entity.model';
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

  sayHello(): void {
    console.log('Hello from Product class');
  }
}
