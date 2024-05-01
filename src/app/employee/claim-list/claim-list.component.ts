import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../../../tools/services/product.service';

@Component({
  selector: 'app-claim-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './claim-list.component.html',
  styleUrl: './claim-list.component.scss'
})
export class ClaimListComponent {
  products: any[] = [];

  constructor(private productService: ProductService){}
  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProductList().subscribe(
      (data) => {
        if (data && data.content && Array.isArray(data.content)) {
          this.products = data.content;
        } else {
          console.error('Invalid product list format:', data);
        }
      },
      (error) => {
        console.error('Error fetching product list:', error);
      }
    );
  }
}
