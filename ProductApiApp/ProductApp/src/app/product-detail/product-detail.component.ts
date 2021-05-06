import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../Product';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

 
   id:number;
   task$:Observable<Product>;
   prod:Product;
   
  


  constructor(private appservice : AppService,private activatedRoute:ActivatedRoute) {
   
     this.task$ = new Observable<Product>();
   }

  ngOnInit(): void {
    // this.task$=this.appservice.getProduct(this.prod.id)
    this.activatedRoute.paramMap.subscribe(params => { 
      console.log(params);
       this.id = Number(params.get('id')); 
       this.appservice.getProduct(this.id).subscribe(
         data=>{
           this.prod=data;
         }
       );
      
       console.log(this.id);
    } 
    )
     
  }
  deleteProduct()
  {
      this.appservice.deleteProduct(this.id).subscribe();
  }

}
