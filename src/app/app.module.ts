import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProductComponent } from './components/product/product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import {ProductService} from "./services/product.service";
import {WishlistService} from "./services/wishlist.service";
import {CartService} from "./services/cart.service";
import { CurrencyComponent } from './components/currency/currency.component';
import { ConvertCurrencyPipe } from './pipes/convert-currency.pipe';
import { HeaderComponent } from './components/header/header.component';
import { DemoFormComponent } from './components/demo-form/demo-form.component';
import { DemoModelFormComponent } from './components/demo-model-form/demo-model-form.component';
import { ImageLoaderDirective } from './directives/image-loader.directive';
import {CurrencyService} from "./services/currency.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductsListComponent,
    WishlistComponent,
    CurrencyComponent,
    ConvertCurrencyPipe,
    HeaderComponent,
    DemoFormComponent,
    DemoModelFormComponent,
    ImageLoaderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductService, WishlistService, CartService, CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
