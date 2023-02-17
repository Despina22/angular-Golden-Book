export class Employee {
  id: number;
  name: string;
  email: string;
  phone: number;
  jobTitle: string;

  constructor(
    id: number,
    name: string,
    email: string,
    phone: number,
    jobTitle: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.jobTitle = jobTitle;
  }
}
