import { Injectable } from '@angular/core';
import { EventModel } from 'src/app/shared/models/event-model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: EventModel[];

  constructor() {
    this.events = [];
  }

  public get(): EventModel[] {
    return this.events;
  }

  public add(event: EventModel): void {
    const id: number = this.events.length ? this.events[this.events.length - 1].id + 1 : 1;
    event.id = id;
    this.events.push(event);
  }

  public update(event: EventModel): void {}

  public delete(event: EventModel): EventModel[] {
    const indice: number = this.events.findIndex((item: EventModel) => item.id === event.id);
    this.events.splice(indice, 1);
    return this.events;
  }
}
