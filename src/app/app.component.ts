import {Component, OnInit} from '@angular/core';
import {SwUpdateService} from './swUpdate.service';
import {WeatherService} from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public currentCity = '';
  public currentTemp = '';

  constructor(
    private swUpdateService: SwUpdateService,
    public weatherService: WeatherService
    ) {
  }

  ngOnInit(): void {
    this.weatherService.getForecast().subscribe(resp => {
      this.currentCity = resp.data[0].city_name;
      this.currentTemp = resp.data[0].temp;
    });
  }
}
