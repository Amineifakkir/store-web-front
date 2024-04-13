import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
readonly BASE_URL = environment.BASE_URL+'bill'
  constructor(private httpClient: HttpClient) {}

  getAllOrders(){
    return this.httpClient.get<Array<Client>>(
      `${this.BASE_URL}`
    );
  }

  addNewOrders(client:Client, products:Product[]){

    return this.httpClient.post<Client>(`${this.BASE_URL}`, client)
  }

  

}