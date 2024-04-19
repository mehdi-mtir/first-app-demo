import { Injectable } from '@angular/core';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books = [
    {
      id : 1, 
      title : "Slight edge", 
      author : "Jeff Olsen", 
      price : 10, 
      cover : "./assets/slightedge.jpg",
      description : "Slight edge description"
    },
    {
      id : 2, 
      title : "The Power of habit", 
      author : "Charles Duhigg", 
      price : 15,
      cover : "./assets/thepowerofhabit.jpg",
      description : "The power oh habit description"
    },
    {
      id : 3, 
      title : "Atomic Habits", 
      author : "James Clear",  
      price : 20,
      cover : "./assets/atomichabits.jpg",
      description : "Atmic habits description"
    }
  ];

  constructor() { }

  getBooks() : Book[]{
    return [...this.books];
  }
}
