import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

export interface OkCancelDialogData {
  title: string,
  content: string
}

@Component({
  selector: 'app-yes-no-dialog',
  templateUrl: './yes-no-dialog.component.html',
  styleUrls: ['./yes-no-dialog.component.scss']
})
export class YesNoDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: OkCancelDialogData) {
  }

  ngOnInit(): void {
  }

}
