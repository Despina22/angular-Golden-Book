export class Customer {
  constructor(
    private id: number,
    private name: string,
    private email: string,
    private phone: string,
    private address: string
  ) {
    this.id;
    this.name;
    this.email;
    this.phone;
    this.address;
  }

  customerInfo(): string {
    return `My name is: ${this.name}.You can contact me via email ${this.email} or phone ${this.phone}.`;
  }
}
