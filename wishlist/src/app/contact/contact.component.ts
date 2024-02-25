import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  senderNameControl = new FormControl('')
  senderEmailControl = new FormControl('')
  senderMessageControl = new FormControl('')

  submitForm() {
    if (this.senderEmailControl.dirty)
      alert(`You changed the name field`)
  }

}
