
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],

  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  currentRoute: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.isAuthenticated$.subscribe(status => {
      this.isLoggedIn = status;
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        this.checkAuth();
      }
    });
  }

  checkAuth() {
    const publicRoutes = ['/login', '/signup'];
    const isPublicRoute = publicRoutes.some(route => this.currentRoute.startsWith(route));

    if (!this.authService.isAuthenticated() && !isPublicRoute) {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.authService.logout();
  }
}


