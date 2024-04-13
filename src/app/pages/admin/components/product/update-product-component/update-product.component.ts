import {
  Component,
  Inject
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent {


  newProductData: Product = {
    id: this.clientData.id,
    title: this.clientData.title,
    ref: this.clientData.ref,
    desc: this.clientData.desc,
    price: this.clientData.price,
    type: this.clientData.type,
  };
  constructor(private productService: ProductService, public dialogRef: MatDialogRef<UpdateProductComponent>,
    @Inject(MAT_DIALOG_DATA) public clientData: any) { }



  submitUpdateData() {
    const titleProduct = this.newProductData.title
    const refProduct = this.newProductData.ref
    const priceProduct = this.newProductData.price
    const typeProduct = this.newProductData.type
    const descProduct = this.newProductData.desc
    if (
      titleProduct != null || titleProduct != '' &&
      refProduct != null || refProduct != '' &&
      priceProduct != null || priceProduct != 0 &&
      typeProduct != null || typeProduct != '' &&
      descProduct != null || descProduct != ''
    ) {
      this.productService.updateProduct(this.newProductData).subscribe((response: Product) => {

        alert('Client updated successfully');
      },

      )
    } else
      return;
    this.closePopup();
  }





  // Closes the popup
  closePopup() {
    this.dialogRef.close();
  }



}
