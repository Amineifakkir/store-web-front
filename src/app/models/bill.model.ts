import { Client } from "./client.model";
import { Product } from "./product.model";

export interface Bill {
  id:number;
  client: Client;
  product: Product[];
  quantite: string;
}
