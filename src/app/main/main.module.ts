import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {MainComponent} from './main/main.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainRoutingModule} from "./main-routing.module";

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MainRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule {
}
