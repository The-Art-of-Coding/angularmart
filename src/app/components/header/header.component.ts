import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Product} from "../../models/product";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() currencyCode!: string;
  cartTotal = 0.0;

  constructor(private cartService: CartService) {
    this.cartService.watchCart().subscribe((data:any) => {
      let total = 0.0;
      data.forEach((element:any) => {
        total += element.item.price;
      });
      this.cartTotal = total;
    });
  }

  ngOnInit(): void {
  }

}
