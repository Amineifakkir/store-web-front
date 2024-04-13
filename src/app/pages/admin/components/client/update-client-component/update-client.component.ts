import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({  
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.scss']
})
export class UpdateClientComponent {


  newClientData: Client = {
    id:this.clientData.id,
    nom: this.clientData.nom,
    prenom: this.clientData.prenom,
    adresse: this.clientData.adresse,
    numTel: this.clientData.numTel,
    ville: this.clientData.ville,
  };
constructor(private clientService: ClientService, public dialogRef: MatDialogRef<UpdateClientComponent>,
  @Inject(MAT_DIALOG_DATA) public clientData: any ) { }
  

  
  submitUpdateData() {
    const nomClient = this.newClientData.nom
    const prenomClient = this.newClientData.prenom
    const adresseClient = this.newClientData.adresse
    const phoneClient = this.newClientData.numTel
    const villeClient = this.newClientData.ville
    if (
      nomClient != null || nomClient != '' &&
      prenomClient != null || prenomClient != '' &&
      adresseClient != null || adresseClient != '' &&
      phoneClient != null || phoneClient != 0 &&
      villeClient != null || villeClient != ''

    ) {
      this.clientService.updateClient(this.newClientData).subscribe((response: Client) => {

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
