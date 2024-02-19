import { Component, Input } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {
  @Input()
  items: WishItem[] = []
  toggleItem(e: any, item: WishItem) {
    item.isCompleted = !item.isCompleted;
  }
}
