import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';
import { EventService } from 'src/shared/services/EventService';
/**
 * This file defines practically everything that our application requires in order to run
 * 
 * NgModule:{
 * declarations:Set of components that belongs to this module
 * 
 * imports:Things that are available to the templates inside this module
 * 
 * providers: objects that can be injected to parts of this module
 * 
 * bootstrap: The entry point of our module
 * }
 */
@NgModule({
  declarations: [
    AppComponent,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule//to use the ngModel
  ],
  providers: [
    // EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
