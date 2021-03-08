import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventInterface } from 'src/app/shared/models/interfaces/event-interface';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {
  @Output() public filterActive: EventEmitter<number> = new EventEmitter();

  @Input() events: EventInterface[];

  public activeFilter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public filter(priority: number): void {
    this.filterActive.emit(priority);
    this.activeFilter = priority;
  }

  public countFiltered(): number {
   return this.events.filter((event: EventInterface) => event.priority === this.activeFilter || this.activeFilter === 0).length;
  }

}
