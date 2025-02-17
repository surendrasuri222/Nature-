import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgStyle } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule,HeaderComponent,NavigationComponent,SidebarComponent,RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nature';
}
