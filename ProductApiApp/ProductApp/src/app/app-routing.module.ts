import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AppComponent } from './app.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FindProductComponent } from './find-product/find-product.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListWithAsyncComponent } from './product-list-with-async/product-list-with-async.component';
import { ProductListWithSubscribeComponent } from './product-list-with-subscribe/product-list-with-subscribe.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  
  {path:"products", component:HomeComponent},
  {path:"products/:id", component:ProductDetailComponent},
  {path:"addProduct", component:AddProductComponent},
  {path:"findProduct", component:FindProductComponent},
  {path:"deleteProduct", component:DeleteProductComponent},
  {path:"updateProduct", component:UpdateProductComponent},
  {path:"products/edit/:id", component:EditProductComponent},
  {path: "", redirectTo:"products", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
