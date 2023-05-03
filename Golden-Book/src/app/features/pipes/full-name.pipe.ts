import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/single-book.model';

@Pipe({
  name: 'fullName',
})
export class FullNamePipe implements PipeTransform {
  transform(book: Book): string {
    return `${book.authorFirstName} ${book.authorLastName}`;
  }
}
