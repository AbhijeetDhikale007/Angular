import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  constructor(private fb: FormBuilder) { }
  registrationForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    message: ['', Validators.required],
  })
  myDetails = this.fb.group({
    city: ['', Validators.required],
    State: ['', Validators.required],
    comment: ['', Validators.required]
  })
}