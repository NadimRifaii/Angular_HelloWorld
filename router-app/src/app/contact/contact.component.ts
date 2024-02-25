import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import invalidEmailDomain from './invalidEmailDomain';
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
    senderName: new FormControl('', [Validators.required,]),
    senderEmail: new FormControl('', [Validators.required, Validators.email, invalidEmailDomain]),
    senderMessage: new FormControl('', [Validators.required, Validators.minLength(10)]),
  })
  submitForm() {
    console.log(this.contactForm.value)
    console.log(this.contactForm.valid)
  }

}
