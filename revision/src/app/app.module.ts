import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WishModule } from './wish/wish.module';
import { MilestoneModule } from './milestone/milestone.module';

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

  ],
  imports: [
    BrowserModule,
    WishModule,
    MilestoneModule
  ],
  providers: [
    // EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
