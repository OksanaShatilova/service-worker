import {Component, OnInit} from '@angular/core';
import {SwUpdateService} from './swUpdate.service';
import {WeatherService} from './weather.service';
import {SwPush} from '@angular/service-worker';
import {PushNotificationService} from './push-notification.service';

const VAPID_PUBLIC = 'BDLOINkRN-HCHfTLpROQ8TLIds3jibDIFC8ThyBD8HBSQs2GqbmbZWQpYOZfH14EAr3FNrlKPoPlzAnWyH8WYpI';

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
      public weatherService: WeatherService,
      public swPush: SwPush,
      public pushService: PushNotificationService
    )
  {
    if (swPush.isEnabled) {
      swPush.requestSubscription({
        serverPublicKey: VAPID_PUBLIC
      })
        .then(subscription => {
          console.log(subscription);
          pushService.sendSubscriptionToTheServer(subscription).subscribe();
        });

    }
  }

  ngOnInit(): void {
    this.weatherService.getForecast().subscribe(resp => {
      this.currentCity = resp.data[0].city_name;
      this.currentTemp = resp.data[0].temp;
    });
  }

  getMoscowWeather(): void {
    this.weatherService.getMoscowForecast().subscribe(resp => {
      console.log(resp);
    });
  }
}
