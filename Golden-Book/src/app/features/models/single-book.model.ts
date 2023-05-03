export interface Book {
  id: number;
  title: string;
  authorFirstName: string;
  authorLastName: string;
  country?: string;
  isbn?: string;
  publishedDate: Date;
  description: string;
  authorDescription?: string;
  category: string;
  url: string;
  deletedAt?: Date;
}
