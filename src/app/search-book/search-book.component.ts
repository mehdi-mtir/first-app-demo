import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent {
  @Output() searchEvent = new EventEmitter<string>()

  /*sendKeyword(keyword : string){
    this.searchEvent.emit(keyword);
  }*/

  validForm(f : NgForm){
    console.log(f);
  }
}
