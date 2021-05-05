import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListWithSubscribeComponent } from './product-list-with-subscribe/product-list-with-subscribe.component';
import { ProductListWithAsyncComponent } from './product-list-with-async/product-list-with-async.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { FormGroupName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { AddProductComponent } from './add-product/add-product.component';
import { FindProductComponent } from './find-product/find-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {MatDatepickerModule} from '@angular/material/datepicker';
 
// import {MatTableModule} from '@angular/material/table';
// import {MatTabsModule} from '@angular/material/tabs';
// import {MatCardModule} from '@angular/material/card';
// import {MatCheckboxModule} from '@angular/material/checkbox';
// import {MatRadioModule} from '@angular/material/radio';
// import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListWithSubscribeComponent,
    ProductListWithAsyncComponent,
    AddProductComponent,
    FindProductComponent,
    UpdateProductComponent,
    DeleteProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
