import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';


const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isCompleted,
  (item: WishItem) => item.isCompleted,
]


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
  title = 'wishlist';
  items: WishItem[] = [
    new WishItem('To Learn Angular', false),
    new WishItem('To Learn React', true),
    new WishItem('To Learn Vue', false)
  ];
  listFilter: String = '0'
  newWishText = ''
  get visibleItems(): WishItem[] {
    let value = this.listFilter
    return this.items.filter(filters[+value])
  }
  addWish() {
    this.items.push(new WishItem(this.newWishText, false))
    // this.visibleItems = [...this.items]
    this.newWishText = ''
  }
  // filterChanged(value: any) {
  //   switch (value) {
  //     case "0":
  //       this.visibleItems = this.items;
  //       break;
  //     case "1":
  //       this.visibleItems = this.items.filter(item => !item.isCompleted)
  //       break;
  //     default:
  //       this.visibleItems = this.items.filter(item => item.isCompleted)
  //   }
  // }

}
