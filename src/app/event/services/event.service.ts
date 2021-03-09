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

  public findOne(id: number): EventModel {
    return this.events.find((event: EventModel) => event.id === id);
  }

  public get(): Promise<EventModel[]> {
    return new Promise((resolve: any) => {
      if (this.events.length > 0) {
        resolve(this.events)
      } else {
        const events: any = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];
        this.events = events.map((event: any) => new EventModel().deserialize(event));
        resolve(this.events);
      }
    });
  }

  public add(event: EventModel): void {
    const id: number = this.events.length ? this.events[this.events.length - 1].id + 1 : 1;
    event.id = id;
    this.events.push(event);
    localStorage.setItem('events', JSON.stringify(this.events));
  }

  public update(event: EventModel): void {
    this.events.splice(
      this.events.findIndex((item: EventModel) => item.id === event.id),
      1,
      event
    );
    localStorage.setItem('events', JSON.stringify(this.events));
  }

  public delete(event: EventModel): EventModel[] {
    const indice: number = this.events.findIndex((item: EventModel) => item.id === event.id);
    this.events.splice(indice, 1);
    localStorage.setItem('events', JSON.stringify(this.events));
    return this.events;
  }
}
