import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Header/navbar/navbar.component';
import { HeaderComponent } from './Header/header.component';
import { Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SecondeNavComponent } from './seconde-nav/seconde-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeaderComponent,FormsModule, CommonModule, SecondeNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Starv2';
  constructor(public router: Router) {}
  
  // Use this to detect if the current route is either 'LogIn' or 'SignIn'
  isAuthPage() {
    return this.router.url === '/LogIn' || this.router.url === '/SignIn';
  }
}
