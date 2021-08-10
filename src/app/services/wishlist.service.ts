import { Injectable } from '@angular/core';
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishlist: Product[] = [];
  constructor() { }

  addToWishList(product: Product){
    let added = false;
    let wishList = this.wishlist;
    if(!this.isWishListed(product)){
      this.wishlist = this.wishlist.concat(product);
      added = true;
      // wishList = this.wishlist;
    }
      return  new Promise(function(resolve, reject) {
        if(added){
          resolve(wishList);
        } else {
          reject(new Error("Product already in Wishlist"))
        }
      });
  }

  isWishListed(product: any) {
    return !!this.wishlist.find(element => element.id == product.id)
  }

  isInWishList(product: any) {
    let result = !!this.wishlist.find(element => element.id == product.id);
    return new Promise(function(resolve, reject) {
      if(result) {
        resolve(result);
      } else {
        reject(new Error("Product already in Wishlist"))
      }
    });
  }
}
