import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class WeatherService {
  constructor(private http: HttpClient) {
  }
  getForecast(): Observable<any> {
    return this.http.get('https://api.weatherbit.io/v2.0/current?city=Saint-Petersburg&key=1b2e41cc6ea548908cef9ea8499e4875');
  }

  getForecast2(): Observable<any> {
    return this.http.get('https://api.weatherbit.io/v2.0/current?city=Moscow&key=1b2e41cc6ea548908cef9ea8499e4875');
  }
}
