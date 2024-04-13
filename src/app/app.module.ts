import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';




import { ProductsHeaderComponent } from './pages/home/components/products-header/products-header.component';
import { ProductBoxComponent } from './pages/home/components/product-box/product-box.component';
import { FiltersComponent } from './pages/home/components/filters/filters.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartService } from './services/cart.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreService } from './services/store.service';
import { AdminComponent } from './pages/admin/admin.component';
import { ClientListComponent } from './pages/admin/components/client/client-list-componenet/client-list.component';
import { OrdersListComponent } from './pages/admin/components/orders/orders-component/orders-list.component';
import { ProductListComponent } from './pages/admin/components/product/product-list-component/product-list.component';
import { DeleteComponent } from './pages/admin/components/client/delete-component/delete.component';
import { AddClientComponent } from './pages/admin/components/client/add-client-component/add-client.component';
import { AddProductComponent } from './pages/admin/components/product/add-product-component/add-product.component';
import { UpdateClientComponent } from './pages/admin/components/client/update-client-component/update-client.component';
import { DeleteProductComponent } from './pages/admin/components/product/delete-component/delete-product.component';
import { UpdateProductComponent } from './pages/admin/components/product/update-product-component/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsHeaderComponent,
    ProductBoxComponent,
    FiltersComponent,
    HeaderComponent,
    CartComponent,
    AdminComponent,
    AddClientComponent,
    AddProductComponent,
    UpdateClientComponent,
    UpdateProductComponent,
    DeleteComponent,
    DeleteProductComponent,
    ClientListComponent,
    OrdersListComponent,
    ProductListComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatTreeModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
     MatSelectModule
  ],


  providers: [CartService, StoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
