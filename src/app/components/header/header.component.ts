import { Component, Input, OnInit } from '@angular/core';
import { Bill } from 'src/app/models/bill.model';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { Client } from 'src/app/models/client.model';
import { CartService } from 'src/app/services/cart.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit{
  private _cart: Cart = { items: [] };
  itemsQuantity = 0;
  clientData:Client[] | undefined;
  selectedOption:String | undefined;

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, curent) => prev + curent, 0);
  }

  constructor(private cartService: CartService,private clientService : ClientService) {}
  ngOnInit(): void {
    this.getAllClient();
  }

  getTotal(items: CartItem[]): number {
    return this.cartService.getTotal(items);
  }

  getAllClient() {
    this.clientService.getAllClient().subscribe(
      (data: Client[]) => {
        this.clientData=data;
      },
      (error: any) => {
        // Handle any errors that occurred during the HTTP request
        console.error(error);
      }
    );
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  addNewOrder(bill:Bill){

  }
}
