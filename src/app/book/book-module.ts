import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookList } from './book-list/book-list';

@NgModule({
  declarations: [BookList],
  imports: [CommonModule],
  exports: [BookList],
})
export class BookModule {}
