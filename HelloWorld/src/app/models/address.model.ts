export class Address {
  street: string;
  houseNumber: number;
  city: string;
  country: string;

  constructor(
    street: string,
    houseNumber: number,
    city: string,
    country: string
  ) {
    this.street = street;
    this.houseNumber = houseNumber;
    this.city = city;
    this.country = country;
  }
}
