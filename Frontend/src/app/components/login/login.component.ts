import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [  ReactiveFormsModule, CommonModule, RouterLink, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  registerUserForm!: FormGroup;

  constructor(private fb:FormBuilder){

    this.registerUserForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      
    })
  }

  onSubmit(){
    console.log(this.registerUserForm.value)
  }

}

