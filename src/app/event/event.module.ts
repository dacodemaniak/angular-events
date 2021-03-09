import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './components/event-list/event-list.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { DueDatePipe } from './pipes/due-date.pipe';
import { RowDirective } from './directives/row.directive';



@NgModule({
  declarations: [
    EventListComponent,
    FilterBarComponent,
    DueDatePipe,
    RowDirective
  ],
  imports: [
    CommonModule
  ]
})
export class EventModule { }
