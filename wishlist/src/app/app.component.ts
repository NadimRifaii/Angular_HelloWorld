import { Component, OnInit } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

import events from '../shared/services/eventService'

@Component({
  selector: 'app-root',//<app-root></app-root> 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * The Component decorator tells angular how this component is going to be used with the 
 * selector
 * templateUrl
 * stylesUrls
 * for this component
 */
export class AppComponent {
  items: WishItem[] = [
    new WishItem(`To Learn Angular`, false),
    new WishItem(`To Learn React`, true),
    new WishItem(`To Learn Express`, true),
  ]
  title = 'wishlist';
  filter: any = () => {

  }
  constructor() {
    events.listen('removeWish', (wish: WishItem) => {
      const index = this.items.indexOf(wish);
      this.items.splice(index, 1)
    })
  }
  // visibleItems: WishItem[] = this.items
  get visibleItems(): WishItem[] {
    return this.items.filter(this.filter);
  }
  /**
   * The getter allow us to react to any change that we make to the original items array and it's inner objects
  */
  filterChanged(value: any) {
    // this.visibleItems = this.items.filter(filters[value]);
  }

}
