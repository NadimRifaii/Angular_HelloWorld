import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // senderNameControl = new FormControl(''),
  // senderEmailControl = new FormControl(''),
  // senderMessageControl = new FormControl(''),
  contactForm = new FormGroup({
    senderName: new FormControl(''),
    senderEmail: new FormControl(''),
    senderMessage: new FormControl(''),
  })
  submitForm() {
    console.log(this.contactForm.value)
    console.log(this.contactForm.valid)
  }

}
