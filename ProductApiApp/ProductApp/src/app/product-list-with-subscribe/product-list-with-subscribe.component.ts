import { ChangeDetectionStrategy, ChangeDetectorRef, Input, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../Product';

@Component({
  selector: 'app-product-list-with-subscribe',
  templateUrl: './product-list-with-subscribe.component.html',
  styleUrls: ['./product-list-with-subscribe.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListWithSubscribeComponent implements OnInit ,OnDestroy {
  
   @Input() productData :Observable<Product[]>;
   products :Product[]=[];
  productsubscription : Subscription;
  constructor(private cd : ChangeDetectorRef) {
    this.productsubscription=new Subscription();
    this.productData = new Observable<Product[]>();
   }

   ngOnInit(){
    this.productsubscription = this.productData.subscribe(
      data=>{
           this.products=data;  
           this.cd.markForCheck();
      },
      error=>{
        console.log(error);
      },
      ()=>console.log("complete")
    )
  }
  ngOnDestroy(){
    if(this.productsubscription)
    {
      this.productsubscription.unsubscribe();
    }
  }
}
