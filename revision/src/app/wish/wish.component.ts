import { Component } from '@angular/core';
import { EventService } from 'src/shared/services/EventService';
import { WishService } from './wish.service';
import { WishItem } from 'src/shared/models/WishItem';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent {
  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data: any) => {
      this.items = data
    },
      (error: any) => {
        alert(error.message)
      }
    )
  }
  constructor(private events: EventService, private wishService: WishService) {
    events.listen('removeWish', (item: any) => {
      // this.items = this.items.filter(i => i.wishText !== item.wishText)
      const index = this.items.indexOf(item)
      this.items.splice(index, 1)
      console.log(this.items[index] == item)
    })
  }
  items: WishItem[] = [
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
