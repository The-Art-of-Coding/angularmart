import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {WishlistService} from "../../services/wishlist.service";
import {CartService} from "../../services/cart.service";
import {ProductService} from "../../services/product.service";
import {CurrencyService} from "../../services/currency.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() currencyCode!: string;
  productsList : Product[] = [];
  error:any;
  success:any;
  currencySubscription!: Subscription


  constructor(
    private wishListService: WishlistService,
    private cartService: CartService,
    private productService: ProductService,
    private currencyService: CurrencyService) {
    this.productsList = this.productService.getProducts();
  }

  ngOnInit(): void {
    this.currencySubscription = this.currencyService.currencyObservable.subscribe((code)=>{
      this.currencyCode = code;
    })
  }

  ngOnDestroy(){
    this.currencySubscription!.unsubscribe();
  }

  addToWishList(product: any) {
    this.wishListService.addToWishList(product).then((data:any) => {
      this.success = "Product added to Wishlist"
    })
      .catch((error:any) => {
        this.error = error;
      });
  }

  addToCart(data: any) {
    // this.cartService.addToCart(data.product, data.quantity);
    this.cartService.addToCart(data.product, data.quantity).subscribe((data:any) => {
      this.success = "Added to Cart."
    },
      (error:any) => {
      this.error = error;
      });
  }

}
