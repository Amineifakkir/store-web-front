import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from 'src/app/models/client.model';
import { Product } from 'src/app/models/product.model';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: '[app-orders-list]',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']

})
export class OrdersListComponent {
  dataClient: Client[] = [];
  displayedColumns: string[] = ['position', 'name', 'prenom', 'adresse', 'Nº Tele', 'ville','action'];
  dataSource = new MatTableDataSource<Client>(this.dataClient);

  constructor(private ordersService: OrdersService,private dialog: MatDialog ){ }
  

  ngOnInit(): void {
    this.getAllBill();
  }

  getAllBill() {
    this.ordersService.getAllOrders().subscribe(
      (data: Client[]) => {
        this.dataClient = data;
        this.dataSource.data = this.dataClient; // Update dataSource with fetched data
        console.log(data);
      },
      (error: any) => {
        // Handle any errors that occurred during the HTTP request
        console.error(error);
      }
    );
  }

 

}
