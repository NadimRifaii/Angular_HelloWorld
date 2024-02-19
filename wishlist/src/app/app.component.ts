import { Component } from '@angular/core';
import { WishtItem } from 'src/shared/models/wishItem';
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
  items: WishtItem[] = [
    new WishtItem('To Learn Angular', false),
    new WishtItem('To Learn React', true),
    new WishtItem('To Learn Vue', false)
  ];
  newWishText = ''
  addWish() {
    this.items.push(new WishtItem(this.newWishText, false))
    this.newWishText = ''
  }
  toggleItem(e: any, item: WishtItem) {
    item.isCompleted = !item.isCompleted;
  }
}
