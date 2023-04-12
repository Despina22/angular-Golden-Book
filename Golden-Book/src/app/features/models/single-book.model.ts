export interface Book {
  id: number;
  title: string;
  author: string;
  country?: string;
  isbn?: string;
  publishedDate: number;
  description: string;
  authorDescription?: string;
  category: string;
  url: string;
  deletedAt?: Date;
}
