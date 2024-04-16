import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  showFiller = false;
  /* if auth then set auth true */
  isAuth: boolean = false;
  private auth: Auth = inject(Auth);
  constructor() {}
  async logout() {
    /* logout user */
    await this.auth.signOut().then(() => {
      console.log('User logged out successfully');
    });
    this.isAuth = false;
  }
  async ngOnInit() {
    /* check if user is logged in */
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }
    });
  }
}
