import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './components/event-list/event-list.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { DueDatePipe } from './pipes/due-date.pipe';
import { RowDirective } from './directives/row.directive';
import { UserInterfaceModule } from '../shared/user-interface/user-interface.module';
import { AddEventComponent } from './components/add-event/add-event.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EventListComponent,
    FilterBarComponent,
    DueDatePipe,
    RowDirective,
    AddEventComponent
  ],
  imports: [
    CommonModule,
    UserInterfaceModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class EventModule { }
