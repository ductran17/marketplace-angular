import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(){
    this.initRegForm();
  }
  
  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      // Handle form submission
    }
  }

  initRegForm() {
    this.registrationForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      confirmpassword: ["", Validators.required],
      terms: [false, Validators.requiredTrue]
    });
}
}
