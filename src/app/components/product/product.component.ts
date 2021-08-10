import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Product} from "../../models/product";
import {WishlistService} from "../../services/wishlist.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Input() currencyCode!: string;
  @Output() addToWishList = new EventEmitter()
  @Output() addToCart = new EventEmitter()

  constructor(private wishListService: WishlistService) { }

  ngOnInit(): void {
  }

  isInWishList(product: Product){
    this.wishListService.isInWishList(product).then((data:any) => {
      return data;
    })
      .catch((error:any) => {
        return false;
      });
  }

  fnAddToWishList(product: any){
    this.addToWishList.emit(product);
    product.wishListed = true;
  }

  fnAddToCart(product: any){
    let data = {
      product: product,
      quantity: 1
    }
    this.addToCart.emit(data.product);
  }

}
