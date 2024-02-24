import { Component, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'app-add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css']
})
export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<WishItem>()
  newWishText: string = '';
  addNewWish() {
    // this.items.push(new WishItem(this.newWishText, false));
    this.addWish.emit(new WishItem(this.newWishText))
    this.newWishText = '';
  }
}
