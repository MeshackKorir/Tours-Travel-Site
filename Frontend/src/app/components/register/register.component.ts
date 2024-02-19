import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import {  FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ NavbarComponent, ReactiveFormsModule, CommonModule, RouterLink ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  loginFromSubmit!: FormGroup
  constructor(private fb:FormBuilder){
    this.loginFromSubmit = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]

    })
  }

  registerUser(){

  }
}
