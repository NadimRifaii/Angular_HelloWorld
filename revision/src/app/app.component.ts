import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/WishItem';
// import events from '../shared/services/EventService'
import { EventService } from '../shared/services/EventService'
/**
 * The component decorator gives us information about the component
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private events: EventService) {
    events.listen('removeWish', (item: any) => {
      // this.items = this.items.filter(i => i.wishText !== item.wishText)
      const index = this.items.indexOf(item)
      this.items.splice(index, 1)
      console.log(this.items[index] == item)
    })
  }
  items: WishItem[] = [
    new WishItem('To learn angular', true),
    new WishItem('To revise angular'),
    new WishItem("To master angular")
  ];
  title = 'revision';

  filterChange(value: any) {

  }
  filter: any = () => true
  /**
   * The getter allows us to react to any change that we make to the original items array
   * Any time the items array is modified or the objects inside of it are modified is going to automatically be reflected within the browser
   */
  get visibleItems(): WishItem[] {
    return this.items.filter(this.filter)
  }

}
