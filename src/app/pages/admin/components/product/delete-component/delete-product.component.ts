
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Client } from 'src/app/models/client.model';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: '[app-delete]',
  templateUrl: './delete-product.component.html',
})
export class DeleteProductComponent {


  
  constructor(
    private productService: ProductService,
    public dialogRef: MatDialogRef<DeleteProductComponent>,
    @Inject(MAT_DIALOG_DATA) public productData: any 
  ) { }

  deleteProduct(){
   this.productService.deletProduct(this.productData                                                                                                                                                                                                                                                                                                                                                                                                                            .productId).subscribe((response :Product[]) => {
     alert('Product deleted successfully');
     this.closeDialog();
      return response;
    }
  )
}
  

  closeDialog() {
    this.dialogRef.close(true);
  }
}
