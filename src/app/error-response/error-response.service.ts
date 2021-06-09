import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorResponseComponent } from './error-response/error-response.component';
@Injectable({
  providedIn: 'root'
})
export class ErrorResponseService {

  public isDialogOpen: Boolean = false;
  constructor(public dialog:MatDialog) { }

  openDialog(data:any):any {
    if (this.isDialogOpen) {
        return false;
       
    }
   
    this.isDialogOpen = true;
    const dialogRef = this.dialog.open(ErrorResponseComponent, {
        width: '300px',
        data: data
        
    });

    dialogRef.afterClosed().subscribe(result => {
        this.isDialogOpen = false;
    });
  }
}
