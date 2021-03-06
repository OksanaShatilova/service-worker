import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SwUpdateService} from './swUpdate.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {WeatherService} from './weather.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/custom-ngsw.js', { enabled: environment.production }),
    HttpClientModule,
  ],
  providers: [
    SwUpdateService,
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
