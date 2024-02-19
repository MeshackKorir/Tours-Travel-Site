import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-tours-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './tours-add.component.html',
  styleUrl: './tours-add.component.scss'
})
export class ToursAddComponent {

  createTourForming!: FormGroup
  deleteProfile(){

  }

  retainProfile(){

  }

  createTour(){
    
  }

}
