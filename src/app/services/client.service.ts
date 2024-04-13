import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
readonly BASE_URL = environment.BASE_URL+'client'
  constructor(private httpClient: HttpClient) {}

  getAllClient(){
    return this.httpClient.get<Array<Client>>(
      `${this.BASE_URL}`
    );
  }

  addNewClient(client:Client){

    return this.httpClient.post<Client>(`${this.BASE_URL}`, client)
  }

  deletClient(clientId:number){
    return this.httpClient.delete<Array<Client>>(
      `${this.BASE_URL}/${clientId}`
    )  }
  updateClient(client:Client){
    return this.httpClient.put<Client>(
      `${this.BASE_URL}/${client.id}`,client
    ) 
    

  }

}
