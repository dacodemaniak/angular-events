import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './components/event-list/event-list.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { DueDatePipe } from './pipes/due-date.pipe';
import { RowDirective } from './directives/row.directive';
import { UserInterfaceModule } from '../shared/user-interface/user-interface.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EventManageComponent } from './components/event-manage/event-manage.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    EventListComponent,
    FilterBarComponent,
    DueDatePipe,
    RowDirective,
    EventManageComponent,
    EventFormComponent
  ],
  imports: [
    CommonModule,
    UserInterfaceModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule,
    HttpClientModule,
  ]
})
export class EventModule { }
