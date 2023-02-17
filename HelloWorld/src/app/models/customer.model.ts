import { User } from './base/user.model';
import { Address } from './address.model';
export class Customer extends User {
  constructor(
    id: number,
    name: string,
    email: string,
    phone: string,
    private address: Address
  ) {
    super(id, name, email, phone);
    this.address;
  }

  customerInfo(): string {
    return `My name is: ${this.name}.You can contact me via email ${this.email} or phone ${this.phone}.`;
  }

  getName(): string {
    return this.name;
  }
}
