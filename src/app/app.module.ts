import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SwUpdateService} from './swUpdate.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SwUpdateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
