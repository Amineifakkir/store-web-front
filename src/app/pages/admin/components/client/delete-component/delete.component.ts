import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: '[app-delete-client]',
  templateUrl: './delete.component.html',
})
export class DeleteComponent {


  constructor(
    private clientService: ClientService,
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public clientData: any 
  ) { }

  deleteClient(){
   this.clientService.deletClient(this.clientData.clientId).subscribe((response :Client[]) => {
     alert('Client deleted successfully');
     this.closeDialog();
      return response;
    }
  )
}
  

  closeDialog() {
    this.dialogRef.close(true);
  }
}
