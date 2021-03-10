import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event/components/event-list/event-list.component';
import { EventManageComponent } from './event/components/event-manage/event-manage.component';
import { EventResolver } from './event/resolvers/event.resolver';
import { EventGuard } from './shared/guards/event.guard';

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
    path: 'event',
    component: EventManageComponent,
    resolve: {
      event: EventResolver
    },
    canActivate: [
      EventGuard
    ]
  },
  {
    path: 'event/:id',
    component: EventManageComponent,
    resolve: {
      event: EventResolver
    },
    canActivate: [
      EventGuard
    ]
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
