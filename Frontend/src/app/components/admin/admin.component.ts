import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {  RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { Tour } from '../../Interfaces/Tour.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ RouterLink, NavbarComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  createTourForm!: FormGroup
  // formBuilder: any;
  tourService: any;
  userService: any;
  users: any;

 constructor( private fb: FormBuilder, private router: Router){
  this.createTourForm = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    destination: ['', [Validators.required]],
    price: ['', [Validators.required]],
    type: ['', [Validators.required]],
    startDate: ['', [Validators.required]],
    endDate: ['', [Validators.required]],
  });
 }

  




  visible = true
  notVisible=false
  loggedIn=true
  showProfiles = false;

  // createTour!; FormGroup
  tours!: Tour[];
  // users!: User[];

  getTours() {
    this.tourService.getTours().subscribe(
      (response: any) => {
        this.tours = response;
      },
      (error: any) => {
        console.error('Error fetching tours:', error);
      }
    );
  }


  createTour() {
    let createTour: Tour = this.createTourForm.value;
    this.tourService.createTour(createTour).subscribe(
      () => {
        // this.tours.push(createTour)
        this.getTours();
        this.loadTours();
        // console.log('Tours created successfully');
        // this.modalCommunicationService.notifyTourAdded();
        this.visible=true
        // this.cdr.detectChanges()
      },
      (error: any) => {
        console.error('Error creating tours:', error);
      }
    );
  }
  loadTours() {
    throw new Error('Method not implemented.');
  }

  // toggleProfiles() {
  //   this.router.navigate(['/fomr-tours'])
  // }

    // openAddTourForm(){
  //   this.router.navigate(['/fomr-tours'])
  // }

  getUsers() {
    this.userService.getUsers().subscribe(
      (response: any) => {
        this.users = response;
      },
      (error: { error: { message: any; }; }) => {
        console.error('Error fetching users:',error.error.message);
      }
    );
  }

  deleteUser(userID: string){

  }

  retainUser(userID: string) {
    
  }

  createProfileForm(){

  }

  createProfile(){

  }

}

function createTour() {
  throw new Error('Function not implemented.');
}

function getTours() {
  throw new Error('Function not implemented.');
}

function getUsers() {
  throw new Error('Function not implemented.');
}

