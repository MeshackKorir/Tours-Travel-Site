import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
// import { Router } from '@angular/router';
// import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ FormBuilder, FormGroup,  NgModule ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // constructor(private router: Router) { }

  // navigateToRegister() {
  //   this.router.navigate(['/register']);
  // }
}
