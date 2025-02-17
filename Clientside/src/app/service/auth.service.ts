
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.isAuthenticated());
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private router: Router) {}

  signup(user: { email: string, password: string }) {
    let users = JSON.parse(localStorage.getItem('users') || '[]'); // Get existing users
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  login(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: { email: string; password: string }) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.isAuthenticatedSubject.next(true);
      this.router.navigate(['/dashboard']);
      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('isAuthenticated') === 'true';
  }

  logout() {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }
}
