import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishItem } from 'src/shared/models/WishItem';
// import events from '../../shared/services/EventService'
import { EventService } from 'src/shared/services/EventService';
@Component({
  selector: 'app-wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent {
  constructor(private events: EventService) { }
  @Input() item: WishItem = {} as WishItem
  @Input() wishText: string = ''
  @Input() fullfilled: boolean = false
  @Output() fullfilledChange = new EventEmitter<boolean>()
  get cssClasses() {
    return this.fullfilled ? ['strikeout'] : ['']
    return { 'strikeout text-muted': this.fullfilled }
  }
  removeWish(item: WishItem) {
    this.events.emit('removeWish', item)//event name , information envolved with the event
  }
  toggleItem(event: Event, item: WishItem) {
    this.fullfilled = !this.fullfilled
    this.fullfilledChange.emit(this.fullfilled)
    // item.isComplete = !item.isComplete;
    // this.filterChange(this.listFilter)
  }
}
