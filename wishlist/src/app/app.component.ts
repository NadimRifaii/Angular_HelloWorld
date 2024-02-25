import { Component, OnInit } from '@angular/core';

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
}
