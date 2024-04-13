import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly BASE_URL = environment.BASE_URL + 'product'
  constructor(private httpClient: HttpClient) { }

  getAllProduct() {
    return this.httpClient.get<Array<Product>>(
      `${this.BASE_URL}`
    );
  }

  addNewProduct(product: Product) {

    return this.httpClient.post<Product>(`${this.BASE_URL}`, product)
  }



  deletProduct(productId: number) {
    return this.httpClient.delete<Array<Product>>(
      `${this.BASE_URL}/${productId}`
    )
  }


  updateProduct(product: Product) {
    return this.httpClient.put<Product>(
      `${this.BASE_URL}/${product.id}`, product
    )
  }
  
}
