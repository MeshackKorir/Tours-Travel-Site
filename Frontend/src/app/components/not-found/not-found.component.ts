import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterOutlet],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
