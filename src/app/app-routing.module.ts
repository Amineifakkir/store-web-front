import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/header/login/login.component';
import { ClientListComponent } from './pages/admin/components/client/client-list-componenet/client-list.component';
import { OrdersListComponent } from './pages/admin/components/orders/orders-component/orders-list.component';
import { ProductListComponent } from './pages/admin/components/product/product-list-component/product-list.component';

const routes: Routes = [
  {
    path: 'store',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'client-list',
    component: ClientListComponent,
  },
  {
    path: 'orders-list',
    component: OrdersListComponent,
  },
  {
    path: 'product-list',
    component: ProductListComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
