import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent {
  @Input() bookToShow? : Book; 
  @Output() closeCard = new EventEmitter();

  sendcloseCardEvent(){
    this.closeCard.emit();
  }
}
