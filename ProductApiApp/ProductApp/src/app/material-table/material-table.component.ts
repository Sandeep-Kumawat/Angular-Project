import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../Product';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})
export class MaterialTableComponent implements OnInit ,OnDestroy{

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
  displayedColumns: string[] = ['Id', 'Title', 'Price', 'Quantity','Color','InStocks','ExpiryDate'];
  ngOnDestroy(){
    if(this.productsubscription)
    {
      this.productsubscription.unsubscribe();
    }
  }

}
