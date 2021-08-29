import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() productList:Product[];
  @Output() onProductSelected:EventEmitter<Product>;
  private currentProduct: Product;

  constructor() { 
    this.productList=[];
    this.onProductSelected=new EventEmitter();
    this.currentProduct=new Product("","","",[],0);
  }

  clicked(product:Product):void{
    this.currentProduct=product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

  ngOnInit(): void {
  }

}
