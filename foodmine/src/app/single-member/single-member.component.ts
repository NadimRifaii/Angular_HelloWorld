import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-member',
  templateUrl: './single-member.component.html',
  styleUrls: ['./single-member.component.css']
})
export class SingleMemberComponent {
  memberId: number = 0;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    //extract the new memberId from the url
    this.route.url.subscribe(() => {
      this.memberId = +this.route.snapshot.params['member']
    })
  }
}
