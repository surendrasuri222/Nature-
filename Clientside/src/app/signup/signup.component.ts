
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [FormsModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSignup() {
    if (this.email && this.password) {
      this.authService.signup({ email: this.email, password: this.password });
      alert('Signup successful! Please login.');
      this.router.navigate(['/login']);
    } else {
      alert('Please enter email and password');
    }
  }
}

