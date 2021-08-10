import { Injectable } from '@angular/core';
import {Product} from "../models/product";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productsSubject = new BehaviorSubject<Product[]>([]);
  products: any = [];

  constructor() {
  }

  getCartProducts(): Observable<Product[]>{
     return this.productsSubject.asObservable();
   }

   watchCart(): BehaviorSubject<Product[]>{
     return this.productsSubject;
   }

   addToCart(product: Product,quantity: number): Observable<Product[]>{
    //Check if product already added to array
    if(this.products.filter((element:any) => element.item.id === product.id).length > 0) {
       this.products.forEach((element:any)=>{
          if(element.item.id == product.id ) {
              element.quantity = quantity;
          }
       })
    } else {
      this.products.push({
          item : product,
          quantity : quantity
      });
    }

    this.productsSubject.next(this.products);
    return this.productsSubject.asObservable();
   }

  removeFromCart(product: Product): Observable<Product[]>{
    this.products =  this.products.filter((element:any) => element.item.id != product.id);
    this.productsSubject.next(this.products);
    return this.productsSubject.asObservable();
  }

}
