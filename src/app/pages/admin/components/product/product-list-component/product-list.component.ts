import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from 'src/app/models/client.model';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { AddProductComponent } from '../add-product-component/add-product.component';
import { DeleteProductComponent } from '../delete-component/delete-product.component';
import { UpdateProductComponent } from '../update-product-component/update-product.component';

@Component({
  selector: '[app-product-list]',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']

})
export class ProductListComponent {
  dataProduct: Product[] = [];
  displayedColumns: string[] = ['title', 'ref', 'description', 'price', 'type','action'];
  dataSource = new MatTableDataSource<Product>(this.dataProduct);

  constructor(private productService: ProductService,private dialog: MatDialog ){ }
  

  ngOnInit(): void {
    this.getAllClient();
  }

  getAllClient() {
    this.productService.getAllProduct().subscribe(
      (data: Product[]) => {
     this.dataProduct = data;
        this.dataSource.data = this.dataProduct; // Update dataSource with fetched data
        console.log(data);
      },
      (error: any) => {
        // Handle any errors that occurred during the HTTP request
        console.error(error);
      }
    );
  }

  openDeleteDialog(product : Product) {
    console.log(product);
    
    const dialogRef = this.dialog.open(DeleteProductComponent,{
      data: {
        productId: product.id, 
        productName: product.title
      }
    }
      );
    
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle confirmed deletion (e.g., call delete API)
        this.getAllClient();
        console.log('Client deletion confirmed');
      } else {
        console.log('Client deletion cancelled');
      }
    });
  }

  openUpdateDialog(product : Product) {
    
    const dialogRef = this.dialog.open(UpdateProductComponent,{
      data:  product, 
      
    }
      );
    
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle confirmed deletion (e.g., call delete API)
        this.getAllClient();
        console.log('Client deletion confirmed');
      } else {
        console.log('Client deletion cancelled');
      }
    });
  }
  openAddRowDialog() {
    this.dialog.open(AddProductComponent);
  }

}
