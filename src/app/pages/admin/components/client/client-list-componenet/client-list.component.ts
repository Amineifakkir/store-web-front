import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';
import { DeleteComponent } from '../delete-component/delete.component';
import { AddClientComponent } from '../add-client-component/add-client.component';
import { UpdateClientComponent } from '../update-client-component/update-client.component';

@Component({
  selector: '[app-client-list]',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']

})
export class ClientListComponent {
  dataClient: Client[] = [];
  displayedColumns: string[] = ['position', 'name', 'prenom', 'adresse', 'Nº Tele', 'ville', 'action'];
  dataSource = new MatTableDataSource<Client>(this.dataClient);

  constructor(private clientService: ClientService, private dialog: MatDialog) { }


  ngOnInit(): void {
    this.getAllClient();
  }

  getAllClient() {
    this.clientService.getAllClient().subscribe(
      (data: Client[]) => {
        this.dataClient = data;
        this.dataSource.data = this.dataClient; // Update dataSource with fetched data
        console.log(data);
      },
      (error: any) => {
        // Handle any errors that occurred during the HTTP request
        console.error(error);
      }
    );
  }

  openDeleteDialog(client : Client) {
    console.log(client);
    
    const dialogRef = this.dialog.open(DeleteComponent,{
      data: {
        clientId: client.id, 
        clientName: client.nom + ' ' + client.prenom
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
  openUpdateDialog(client : Client) {
    console.log(client);
    
    const dialogRef = this.dialog.open(UpdateClientComponent,{
      data:  client, 
      
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
    this.dialog.open(AddClientComponent);
  }

}
