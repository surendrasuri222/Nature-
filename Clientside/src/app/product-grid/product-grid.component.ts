import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../service/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-grid',
  imports: [CommonModule],
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {
  products: any[] = [];
  private productService = inject(ProductService);

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
