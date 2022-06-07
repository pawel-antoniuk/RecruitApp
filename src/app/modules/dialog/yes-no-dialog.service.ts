import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {YesNoDialogComponent, OkCancelDialogData} from "./yes-no-dialog/yes-no-dialog.component";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class YesNoDialogService {

  constructor(private dialog: MatDialog) { }

  showMessage(title: string, content: string): Observable<boolean> {
    const dialogRef = this.dialog.open<YesNoDialogComponent, OkCancelDialogData>(
      YesNoDialogComponent, {
        minWidth: '20rem',
        data: {title, content}
      });

    return dialogRef.afterClosed();
  }
}
