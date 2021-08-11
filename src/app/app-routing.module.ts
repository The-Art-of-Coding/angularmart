import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsListComponent} from "./components/products-list/products-list.component";
import {DemoFormComponent} from "./components/demo-form/demo-form.component";
import {DemoModelFormComponent} from "./components/demo-model-form/demo-model-form.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "products", component: ProductsListComponent },
  { path: "forms/template", component: DemoFormComponent },
  { path: "forms/reactive", component: DemoModelFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
