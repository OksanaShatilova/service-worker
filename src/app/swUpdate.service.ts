import { interval } from 'rxjs/index';
import {Injectable} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';

@Injectable()
export class SwUpdateService {
  constructor(sw: SwUpdate) {
    interval(500000).subscribe(() => {
      console.log('checked for update');
      return sw.checkForUpdate();
    });

    sw.available.subscribe((event: any) => {
      sw
        .activateUpdate()
        .then(() => document.location.reload())
        .catch(e => console.log('error', e));
    });

    sw.activated.subscribe((ev: any) => {
      console.log('Previous version: ', ev.previous);
      console.log('Current version: ', ev.current);
    }, (e) => console.log('error', e));
  }

};
