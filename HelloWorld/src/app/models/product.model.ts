export class Product {
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
