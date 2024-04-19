import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css'],
})
export class ListBookComponent implements OnInit {
  
  bookToShow? : Book;
  filteredBooks? : Book[];

  constructor(private bookService : BookService){}

  ngOnInit(): void {
    this.filteredBooks = this.bookService.getBooks();
  }

  showDetails(book : Book|undefined){
    this.bookToShow = book;
  }

  searchBook(keyword : string){
    this.filteredBooks = this.bookService.getBooks().filter(
      book=>book.title.toLocaleLowerCase().includes(keyword)
    )
  }
}
