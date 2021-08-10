import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";
import { ProductComponent } from './components/product/product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import {ProductService} from "./services/product.service";
import {WishlistService} from "./services/wishlist.service";
import {CartService} from "./services/cart.service";
import { CurrencyComponent } from './components/currency/currency.component';
import { ConvertCurrencyPipe } from './pipes/convert-currency.pipe';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductsListComponent,
    WishlistComponent,
    CurrencyComponent,
    ConvertCurrencyPipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService, WishlistService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
