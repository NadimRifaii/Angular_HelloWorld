import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isCompleted,
  (item: WishItem) => item.isCompleted,
]
@Component({
  selector: 'app-wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css']
})
export class WishFilterComponent {
  // @Output() filterEvent = new EventEmitter<any>() // this is an event that emit data to the parent component
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>()

  ngOnInit(): void {
    this.changeFilter('0')
  }

  listFilter: '0' | '1' | '2' = '0';

  changeFilter(value: any) {
    // this.filterEvent.emit(filters[this.listFilter])
    this.filter = value
    this.filterChange.emit(filters[this.filter])
  }
}
