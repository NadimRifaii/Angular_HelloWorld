import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  goToMember(id: number) {
    // this.router.navigate(['members', id]);
    this.router.navigate([id], { relativeTo: this.activatedRoute })
  }
}
