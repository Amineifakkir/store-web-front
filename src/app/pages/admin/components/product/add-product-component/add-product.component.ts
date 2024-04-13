import {
  Component
} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {


  newProductData: Product = {
    id: 0,
    title: '',
    ref: '',
    price: 0,
    type: '',
    desc: ''
  };
  constructor(private productService: ProductService, public dialogRef: MatDialogRef<AddProductComponent>) { }

  //Save new client 
  submitNewData() {
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
      this.productService.addNewProduct(this.newProductData).subscribe((response: Product) => {

        alert('Client added successfully');
      },

      )
    } else
      return;
    this.closePopup();
  }


  // selectedImage!: File | null;

  // onFileSelected(event: any) {

  //    const reader = new FileReader();
  // reader.readAsDataURL(event.target.files[0]);
  // reader.onload = () => {
  //   const base64Image = reader.result; // Assert as string
  //   if(base64Image !=null){
  //     this.newProductData.image = base64Image.split(',')[1]; // Extract base64 data

  //   }
  // };
  // }


  // Closes the popup
  closePopup() {
    this.dialogRef.close();
  }



}
