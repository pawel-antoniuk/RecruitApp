import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MessageDialogComponent, MessageDialogData} from "./message-dialog/message-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class MessageDialogService {

  constructor(private dialog: MatDialog) { }

  showMessage(title: string, content: string) {
    const dialogRef = this.dialog.open<MessageDialogComponent, MessageDialogData>(
      MessageDialogComponent, {
      minWidth: '20rem',
      data: {title, content}
    });

    dialogRef.afterClosed().subscribe();
  }
}
