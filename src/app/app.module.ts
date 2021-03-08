import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventModule } from './event/event.module';

import { UserInterfaceModule } from './shared/user-interface/user-interface.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserInterfaceModule,
    EventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
