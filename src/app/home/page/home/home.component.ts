import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/product/product.service';
import { Product } from '../../../shared/models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bestSellers$: Observable<Product[]>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.bestSellers$ = this.productService.getBestSellers();
  }

}
