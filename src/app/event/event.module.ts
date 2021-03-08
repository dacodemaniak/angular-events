import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './components/event-list/event-list.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';



@NgModule({
  declarations: [
    EventListComponent,
    FilterBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EventModule { }
