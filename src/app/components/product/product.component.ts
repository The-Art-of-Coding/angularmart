import {Component, Input, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Product} from "../../models/product";
import {WishlistService} from "../../services/wishlist.service";
import {CurrencyService} from "../../services/currency.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  @Input() product!: Product;
  // @Input() currencyCode!: string;
  @Output() addToWishList = new EventEmitter()
  @Output() addToCart = new EventEmitter()


  altUrl= 'https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png';
  currencyCode: string = '';
  currencySubscription!: Subscription;

  constructor(private wishListService: WishlistService, private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencySubscription = this.currencyService.currencyObservable.subscribe((code)=>{
      this.currencyCode=code;
    })
  }

  ngOnDestroy() {
    this.currencySubscription!.unsubscribe();
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
    this.addToCart.emit(data);
    product.addedToCart = true;
  }

  convertPrice(){
    console.log("CONVERSION");
  }

}
