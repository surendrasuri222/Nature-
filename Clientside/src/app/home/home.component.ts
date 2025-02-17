import { Component } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
import { ProductGridComponent } from '../product-grid/product-grid.component';
import { SidebarComponent } from '../sidebar/sidebar.component';


@Component({
  selector: 'app-home',
  imports: [CommonModule,SidebarComponent,ProductGridComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


}
