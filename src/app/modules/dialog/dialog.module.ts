import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessageDialogComponent} from './message-dialog/message-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {YesNoDialogComponent} from './yes-no-dialog/yes-no-dialog.component';

@NgModule({
  declarations: [
    MessageDialogComponent,
    YesNoDialogComponent],
  exports: [
    MessageDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class DialogModule {
}
