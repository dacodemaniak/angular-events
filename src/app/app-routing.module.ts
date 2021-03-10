import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventComponent } from './event/components/add-event/add-event.component';
import { EventListComponent } from './event/components/event-list/event-list.component';
import { EventManageComponent } from './event/components/event-manage/event-manage.component';
import { UpdEventComponent } from './event/components/upd-event/upd-event.component';
import { EventResolver } from './event/resolvers/event.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'events',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventListComponent
  },
  {
    path:'event-add',
    component: AddEventComponent
  },
  {
    path: 'event-upd/:id',
    component: UpdEventComponent
  },
  {
    path: 'event',
    component: EventManageComponent,
    resolve: {
      event: EventResolver
    }
  },
  {
    path: 'event/:id',
    component: EventManageComponent,
    resolve: {
      event: EventResolver
    }
  },
  {
    path: '**',
    redirectTo: 'events',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
