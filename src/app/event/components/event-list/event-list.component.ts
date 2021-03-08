import { Component, OnInit } from '@angular/core';
import { EventInterface } from 'src/app/shared/models/interfaces/event-interface';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  public events: EventInterface[] = [];

  public filterActive: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.events.push(
      {
        title: 'Découvrir le framework Angular',
        beginAt: new Date(),
        priority: 3
      },
      {
        title: 'Directive de structure ngFor',
        beginAt: new Date(),
        priority: 3
      },
      {
        title: 'Directive de structure ngIf',
        beginAt: new Date(),
        priority: 1
      },
    );
  }

  public filter(priority: number): void {
    this.filterActive = priority;
  }

  public countFiltered(): number {
    return this.events.filter((event: EventInterface) => event.priority === this.filterActive || this.filterActive === 0).length;
  }

}
