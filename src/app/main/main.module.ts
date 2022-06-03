import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {MainContentComponent} from './main-content/main-content.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainRoutingModule} from "./main-routing.module";

@NgModule({
  declarations: [
    MainContentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MainRoutingModule
  ],
  providers: [],
  bootstrap: [MainContentComponent]
})
export class MainModule {
}
