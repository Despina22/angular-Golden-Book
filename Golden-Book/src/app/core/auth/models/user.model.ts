export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  countryId: number;
  role?: string;
  createdAt: Date;
}
