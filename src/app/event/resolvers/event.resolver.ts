import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { EventModel } from 'src/app/shared/models/event-model';
import { EventService } from '../services/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventResolver implements Resolve<EventModel> {
  public constructor(
    private eventService: EventService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<EventModel> {
    console.log(`Has an id : ${route.params.id ? ' Yes' : 'No'}`);
    if (route.params.id) {
      return of(this.eventService.findOne(+route.params.id));
    }
    return of(new EventModel());
  }
}
