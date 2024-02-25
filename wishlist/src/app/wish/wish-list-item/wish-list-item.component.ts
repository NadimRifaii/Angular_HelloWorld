import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
// import events from '../../shared/services/eventService'
import { EventService } from 'src/shared/services/EventService';
@Component({
  selector: 'app-wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent {
  @Input() i: number = 0
  @Input() wishText!: string // this wishText is a non-null property , it's a trick to the compiler
  @Input() fullfilled!: boolean
  @Input() item!: WishItem
  @Output() fullfilledChange = new EventEmitter<boolean>()

  get cssClasses() {
    // return this.fullfilled ? 'strikeout text-muted' : ''
    // return this.fullfilled ? ['strikeout', 'text-muted'] : []
    // return { 'strikeout': this.fullfilled, 'text-muted': this.fullfilled }
    return { 'strikeout text-muted': this.fullfilled }
  }
  constructor(private events: EventService) { }
  removeWish() {
    this.events.emit('removeWish', this.item)
  }
  toggleItem(event?: Event, item?: WishItem) {
    this.fullfilled = !this.fullfilled
    this.fullfilledChange.emit(this.fullfilled)
    /**
     * When Angular detects a change in the AppComponent class (or any component class), 
     * it will automatically re-render the component and update the view to reflect the changes in the data.
     * This is a key feature of Angular's change detection mechanism. It ensures that the view is always up-to-date 
     * with the component's data, and you don't have to worry about manually updating the view whenever the data changes.
     */
  }
}
