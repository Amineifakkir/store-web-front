import {
  Component
} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({  
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent {


  newClientData: Client = {
    id:0,
    nom: '',
    prenom: '',
    adresse: '',
    numTel: 0,
    ville: '',
  };
constructor(private clientService: ClientService, public dialogRef: MatDialogRef<AddClientComponent>) { }

  //Save new client 
  submitNewData() {
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
      this.clientService.addNewClient(this.newClientData).subscribe((response: Client) => {

        alert('Client added successfully');
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
