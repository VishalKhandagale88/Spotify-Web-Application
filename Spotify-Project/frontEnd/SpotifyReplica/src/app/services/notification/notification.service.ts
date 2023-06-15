import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar:MatSnackBar) { }

  displayNotification(displayMessage:string,buttonText:string){
    this.snackBar.open(displayMessage,buttonText,{
      duration:1000,
      horizontalPosition:'center',
      verticalPosition:'top'
    });
  }

}
