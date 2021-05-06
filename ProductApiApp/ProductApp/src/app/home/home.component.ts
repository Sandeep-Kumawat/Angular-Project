import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showSubscribe:boolean=true;
  showAsync:boolean=false;
  showMaterial:boolean=false;
  products$: Observable<Product[]>;
  constructor(private appservice : AppService) {
    this.products$ = new Observable<Product[]>();

   }

  ngOnInit(): void {
    this.products$ = this.appservice.getTodoItem();
  }
  showSubscribeTable(){
    this.showSubscribe=true;
    this.showAsync=false;
    this.showMaterial=false;
  }
  showAsyncTable(){
    this.showSubscribe=false;
    this.showAsync=true;
    this.showMaterial=false;
  }
  showMaterialTable(){
    this.showSubscribe=false;
    this.showAsync=false;
    this.showMaterial=true;
  }
}
