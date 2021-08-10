import { Injectable } from '@angular/core';
import {Product} from "../models/product";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productsRef = new BehaviorSubject<any>([]);
  products : any = [];

  constructor() {
    this.productsRef.next(this.products);
  }

  getCartProducts(){
     return this.products.asObservable;
   }

    addToCart(product: Product,quantity: number){
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

    this.productsRef.next(this.products);
   }

  removeFromCart(product: Product){
    this.products =  this.products.filter((element:any) => element.item.id != product.id);
    this.productsRef.next(this.products);
  }

}
