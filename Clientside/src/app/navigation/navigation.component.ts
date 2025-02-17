import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink,CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  dropdownOpen = false;

  toggleDropdown(open: boolean) {
    this.dropdownOpen = open;
  }
}
