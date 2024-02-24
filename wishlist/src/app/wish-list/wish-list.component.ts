import { Component, Input } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})

export class WishListComponent {
  @Input()// with Input the data flow is from the parent to the child component
  items: WishItem[] = []

}
