import { Injectable } from '@angular/core';
import {catchError,tap} from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './Product';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http : HttpClient) { }
  getTodoItem():Observable<Product[]>{
    const apiurl = environment.apibaseurl+"Products";
    const headers = {'content-type':'application/json'};

    return this.http.get<Product[]>(apiurl,{'headers':headers}).pipe(
      tap(data=>{console.log(data)}),
      catchError(error=>{
        return throwError(error);
      })
    );
  }
  private handleError(error:any)
  {
    console.error(error);
    return throwError(error);
  }

  addProduct(pro:Product):Observable<Product[]>{
    const apiurl = environment.apibaseurl+"Products";
    const headers = {'content-type':'application/json'};
    Object.defineProperty(pro,'id',{'enumerable':false});
    const tasktodo = JSON.stringify(pro);
    console.log(tasktodo);

    return this.http.post<Product>(apiurl,tasktodo,{headers:headers}).pipe(
      tap((pro:any)=>{
        console.log(pro);
      }),
     catchError(error=>this.handleError(error))
    );
  }
    getProduct(id:number):Observable<Product>{
      const apiurl = environment.apibaseurl+"Products" + id;
      const headers = {'content-type':'application/json'};
      return this.http.get<Product>(apiurl,{headers:headers}).pipe(
        catchError(error=>this.handleError(error))
      );
    }
   updateProduct(product : Product): Observable<Product>{
    const apiurl = environment.apibaseurl+"Products/" + product.id;
    const headers = {'content-type':'application/json'};
    return this.http.put<Product>(apiurl,{headers:headers}).pipe(
      catchError(error=>this.handleError(error))
    );
   }
   deleteProduct(product :Product):Observable<Product>{
    const apiurl = environment.apibaseurl+"Products/" + product.id;
    const headers = {'content-type':'application/json'};
    return this.http.delete<Product>(apiurl,{headers:headers}).pipe(
      catchError(error=>this.handleError(error))
    );
   }
}
