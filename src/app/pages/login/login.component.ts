  import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, collection, doc, setDoc } from '@angular/fire/firestore'; // Import the Firestore module fr
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router) {}

  private auth: Auth = inject(Auth);
  private firestore: Firestore = inject(Firestore);
  email: string = '';
  password: string = '';
  async login(event: Event) {
    event.preventDefault();
    await signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then(() => {
        console.log('User logged in successfully');
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.error('Error logging in user', error);
      });
  }
}
