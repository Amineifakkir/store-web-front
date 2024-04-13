import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { Product } from 'src/app/models/product.model';
import { UpdateProductComponent } from 'src/app/pages/admin/components/product/update-product-component/update-product.component';
import { ClientService } from 'src/app/services/client.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: '[app-product-box]',
  templateUrl: './product-box.component.html',
})
export class ProductBoxComponent  {
  @Input() fullWidthMode = false;
  @Input() product: Product | undefined;
  @Output() addToCart = new EventEmitter();
  clientData :Client[] | undefined;
  showPopup : Boolean = false;
  selectedOption:string | undefined;

  constructor(private clientService: ClientService,private ordersService:OrdersService) {}
 


  onAddToCart(): void {
this.showPopup =true;
    
      this.addToCart.emit(this.product);

    
  
  }
  closePopup(){
    this.showPopup =false
  }

}
