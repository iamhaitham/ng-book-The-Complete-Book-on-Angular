import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-product-department',
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.css']
})
export class ProductDepartmentComponent implements OnInit {
  @Input() product: Product;
  constructor() {
    this.product=new Product("","","",[],0);
   }

  ngOnInit(): void {
  }

}
