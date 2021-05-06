import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../Product';

@Component({
  selector: 'app-find-product',
  templateUrl: './find-product.component.html',
  styleUrls: ['./find-product.component.css']
})
export class FindProductComponent implements OnInit {

  productEditForm:FormGroup;
   id:number;
   task$:Observable<Product>;
   showtable:boolean=false;
   prod:Product;
   inStockValue : boolean = false;
   idForm:FormControl = new FormControl(0);


  constructor(private appservice : AppService) {
    this.productEditForm=new FormGroup({
      Id:new FormControl(this.prod?.id,[Validators.required]),
      Title: new FormControl(this.prod?.name,[Validators.required]),
      Price:new FormControl(this.prod?.price,[Validators.required]),
      Quantity:new FormControl(this.prod?.quantity,[Validators.required]),
      Color:new FormControl(this.prod?.color,[Validators.required]),
      ExpiryDate:new FormControl(this.prod?.expiryDate,[Validators.required]),
      IsInStock:new FormControl(this.prod?.inStocks,[Validators.required]),
  
    });
     
   }

  ngOnInit(): void {
  }
  findData(){
  
      this.showtable=true;
     this.appservice.getProduct(this.id).subscribe(
       data=>{
         console.log(data);
           
         this.productEditForm.get("Title")!.setValue(data.name);
         this.productEditForm.get('Price')!.setValue(data.price);
         this.productEditForm.get('Quantity')!.setValue(data.quantity);
         this.productEditForm.get('Color')!.setValue(data.color);
         this.productEditForm.get('ExpiryDate')!.setValue(data.expiryDate);
         this.productEditForm.get('IsInStock')!.setValue(data.inStocks);
         
       }
      //  e=>{
      //    console.log(e);
      //  }
     )
  }
}
