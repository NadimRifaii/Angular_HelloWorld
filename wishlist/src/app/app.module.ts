import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';

import { EventService } from 'src/shared/services/EventService';

@NgModule({
  declarations: [
    AppComponent,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishListItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,  // to have access to the ngModel
  ],
  providers: [
    EventService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
/**
 * The AppComponent belongs to this module (NgModule) because it's declared in it
 * 
 * The imports are things that are available to the templates (html files) inside of the module (NgModule)
 * 
 * The providers are objects that can be injected to parts of this module 
 * 
 * bootstrap is what is bootstrapped, it is the entry point of the module which is in our case the AppComponent
 */