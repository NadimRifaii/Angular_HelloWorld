import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/WishItem';

/**
 * The component decorator gives us information about the component
 */
const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('To learn angular', true),
    new WishItem('To revise angular'),
    new WishItem("To master angular")
  ];
  listFilter: string = '0'
  newWishText: string = ''
  title = 'revision';
  // visibleItems: WishItem[] = this.items
  addWishItem() {
    this.items.push(new WishItem(this.newWishText));
    // this.filterChange(this.listFilter)
    this.newWishText = '';
  }

  filterChange(value: any) {
    // if (value == '0')
    //   this.visibleItems = this.items
    // if (value == '1')
    //   this.visibleItems = this.items.filter(item => !item.isComplete)
    // if (value == '2')
    //   this.visibleItems = this.items.filter(item => item.isComplete)
  }
  /**
   * The getter allows us to react to any change that we make to the original items array
   * Any time the items array is modified or the objects inside of it are modified is going to automatically be reflected within the browser
   */
  get visibleItems(): WishItem[] {
    return this.items.filter(filters[+this.listFilter])
  }
  toggleItem(event: Event, item: WishItem) {
    item.isComplete = !item.isComplete;
    // this.filterChange(this.listFilter)
  }
}
