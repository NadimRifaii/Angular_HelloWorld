import { Component } from '@angular/core';

// import events from '../shared/services/EventService'
//this object is a dependency in the app and wish-list-item components
//It is a hard dependency because we have actually created that object and we are actually using that object inside of those components
/**
 * Hard dependencies are a little bit problematic because it's more difficult to maintain and update and also it can also cause some issues 
 * whenever you need to test your component
 * 
 * So we want to use the dependency injection service so we don't have to create our dependencies ourselves
 * All we have to do is tell Angular what it is that we want to use and it will automatically inject our dependencies
 */
import { WishItem } from 'src/shared/models/wishItem';
import { WishService } from './wish.service';
import { EventService } from 'src/shared/services/EventService';
@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent {
  items: WishItem[] = [

  ]
  filter: any = () => {

  }
  constructor(private events: EventService, private wishService: WishService) {
    /**
     * All we have to say is I want this wishlist component to rely upon this dependency 
     * and angular will provide that object for us automatically
     */
    this.events.listen('removeWish', (wish: WishItem) => {
      const index = this.items.indexOf(wish);
      this.items.splice(index, 1)
    })
  }
  ngOnInit(): void {
    //callback that will execute when the request has been completed
    this.wishService.getWishes().subscribe((data: any) => {
      this.items = data
    }, (error: any) => {
      alert(error.message)
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
