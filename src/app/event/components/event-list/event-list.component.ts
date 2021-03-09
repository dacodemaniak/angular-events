import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventModel } from 'src/app/shared/models/event-model';
import { EventInterface } from 'src/app/shared/models/interfaces/event-interface';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit, OnDestroy {
  public events: EventModel[] = [];

  public filterActive: number = 0;

  public loading: boolean = true;

  constructor(
    public eventService: EventService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.eventService.get().then((events: EventModel[]) => {
      console.log(`Events : ${JSON.stringify(events)}`);
      this.events = events;
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
  }

  public doDelete(event: EventModel): void {
    this.events = this.eventService.delete(event);
  }

  public doUpdate(event: EventModel): void {
    this.router.navigate(['/', 'event-upd', event.id]);
  }

  public filter(priority: number): void {
    this.filterActive = priority;
  }

  public countFiltered(): number {
    return this.events.filter((event: EventInterface) => event.priority === this.filterActive || this.filterActive === 0).length;
  }

}
