import { Component, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/WishItem';
@Component({
  selector: 'app-add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css']
})
export class AddWishFormComponent {
  @Output() addWishEvent = new EventEmitter<WishItem>()
  newWishText: string = ''
  // visibleItems: WishItem[] = this.items
  addWishItem() {
    // this.items.push(new WishItem(this.newWishText));
    this.addWishEvent.emit(new WishItem(this.newWishText));
    // this.filterChange(this.listFilter)
    this.newWishText = '';
  }
}
