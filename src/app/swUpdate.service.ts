import { interval } from 'rxjs/index';
import {Injectable} from '@angular/core';

@Injectable()
export class SwUpdateService {
  constructor(sw: SwUpdate) {
    interval(3600).subscribe(() => {
      sw.checkForUpdate();
    });

    sw.available.subscribe((event: any) => {
      sw
        .activateUpdate()
        .then(() => document.location.reload())
    });

    sw.activated.subscribe((ev: any) => {
      console.log('Previous version: ', ev.previous);
      console.log('Current version: ', ev.current);
    });
  }

};
