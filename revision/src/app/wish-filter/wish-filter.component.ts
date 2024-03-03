import { Component, EventEmitter, Output, Input } from '@angular/core';
import { WishItem } from 'src/shared/models/WishItem';
const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
]
@Component({
  selector: 'app-wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css']
})
export class WishFilterComponent {
  // @Output() filterEvent = new EventEmitter<any>()
  @Input() filter: any
  @Output() filterChange = new EventEmitter<any>()
  ngOnInit(): void {
    // this.filterEvent.emit(filters[0])
    this.changeFilter(0)
  }
  listFilter: string = '0'
  changeFilter(value: any) {
    // this.filterEvent.emit(filters[value])
    this.filter = filters[value]
    this.filterChange.emit(this.filter)
  }
}
