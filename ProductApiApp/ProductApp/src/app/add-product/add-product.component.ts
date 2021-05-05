import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AppService } from '../app.service';
import { Product } from '../Product';

function priceValidator( min: number, max: number ): ValidatorFn{        //when we are taking input from user or Api
  return (control:AbstractControl):{[key:string]:boolean}|null=>
  {
     if((isNaN(control.value) || control.value<min ||control.value>max))
     {
       return {'priceRange':true};
     }
     return null;
  };
 }


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productEditForm:FormGroup;
  prod:Product;
  min:number=0;
 max:number=1000;
    
inStockValue : boolean = false;


  items$:Observable<Product>
  constructor(private appservice : AppService) {
    this.items$ = new Observable<Product>();
   }

  ngOnInit(): void {
  
    this.productEditForm=new FormGroup({
    Id:new FormControl(this.prod?.id,[Validators.required]),
    Title: new FormControl(this.prod?.name,[Validators.required]),
    Price:new FormControl(this.prod?.price,[priceValidator(this.min,this.max),Validators.required]),
    Quantity:new FormControl(this.prod?.quantity,[Validators.required]),
    Color:new FormControl(this.prod?.color,[Validators.required]),
    ExpiryDate:new FormControl(this.prod?.expiryDate,[Validators.required]),
    IsInStock:new FormControl(this.prod?.inStocks,[Validators.required]),

  });
  this.formcontrolValueChanged();
}
formcontrolValueChanged(){
 
  this.productEditForm.get('IsInStock')?.valueChanges.subscribe((data : string)=>
  {

    console.log(data);
    if(data === "true"){
         this.inStockValue = true;
         console.log("Getting "+this.inStockValue);
    }
    else if(data === "false"){
      this.inStockValue = false;
      console.log("Getting "+this.inStockValue);
    }
   
  });
}
addData(){
  let task : Product= {
    id:99,
    name : this.productEditForm.get("Title")?.value,
    price : this.productEditForm.get("Price")?.value,
    quantity : this.productEditForm.get("Quantity")?.value,
    color : this.productEditForm.get("Color")?.value,
    expiryDate : this.productEditForm.get("ExpiryDate")?.value,
    inStocks : this.inStockValue,
  }
    this.appservice.addProduct(task).subscribe(
     data=>{
       console.log(data);
     }
    );
   
  
} 
cancel(){
  this.productEditForm.reset();
}
}
