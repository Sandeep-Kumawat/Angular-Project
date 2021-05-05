import { ChangeDetectionStrategy, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Product';

@Component({
  selector: 'app-product-list-with-async',
  templateUrl: './product-list-with-async.component.html',
  styleUrls: ['./product-list-with-async.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductListWithAsyncComponent implements OnInit {
  @Input() productData :Observable<Product[]>;
  //products :Product[]=[];
  

  constructor() {
    this.productData = new Observable<Product[]>();
   }

  ngOnInit(): void {
    
  }

}
