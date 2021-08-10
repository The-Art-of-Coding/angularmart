import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {WishlistService} from "../../services/wishlist.service";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() currencyCode!: string;
  productsList : Product[] = [
    {
      id:1,
      name: "Think Like a Monk: The secret of how to harness the power of positivity and be happy now",
      image_url: "/assets/images/product1.jpeg",
      price: 287.00,
      rating: 5,
      description: "Jay Shetty, social media superstar and host of the #1 podcast ‘On Purpose’, distils the timeless wisdom he learned as a practising monk into practical steps anyone can take every day to live a less anxious, more meaningful life. Over the past three years, Jay Shetty has become one of the world’s most popular influencers. One of his clips was the most watched video on Facebook last year, with over 360 million views",
      available: true,
      wishListed:false
    },
    {
      id:2,
      name: "Life's Amazing Secrets: How to Find Balance and Purpose in Your Life",
      image_url: "/assets/images/product2.jpg",
      price: 170.00,
      rating: 4,
      description: "While navigating their way through Mumbai's horrendous traffic, Gaur Gopal Das and his wealthy young friend Harry get talking, delving into concepts ranging from the human condition to finding one's purpose in life and the key to lasting happiness.",
      available: false,
      wishListed: true
    }
  ];
  error:any;
  success:any;


  constructor(
    private wishListService: WishlistService,
    private cartService: CartService) { }

  ngOnInit(): void {
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
    this.cartService.addToCart(data.product, data.quantity);
    // this.cartService.addToCart(data.product, data.quantity).then((data:any) => {
    //   this.success = "Product added to Wishlist"
    // })
    //   .catch((error:any) => {
    //     this.error = error;
    //   });
    this.cartService.getCartProducts().subscribe((data:any) => {
      console.log(data);
    })
    this.success = "Added to Cart";
  }

}
