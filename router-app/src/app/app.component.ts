import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {

  }
  title = 'router-app';
  goToContact() {
    // this.router.navigate(['contact','us']);//contact us
    this.router.navigate(['contact']);
  }
}
