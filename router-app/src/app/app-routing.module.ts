import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
/**
 * localhost:4200/first
 * localhost:4200/second
 */
const routes: Routes = [
  {
    path: '',//Relative path
    component: FirstComponent
  },
  {
    path: '',
    component: SecondComponent
  },
  {
    path: 'second',
    component: SecondComponent
  },
  {
    path: "contact",
    component: ContactComponent
  }
  ,
  {
    path: '**',
    component: NotFoundComponent
  }
];
// Angular uses a first match policy for routing.

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
