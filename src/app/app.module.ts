import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventModule } from './event/event.module';

import { UserInterfaceModule } from './shared/user-interface/user-interface.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocalizationService } from './shared/services/localization.service';

export function HttpLoaderFactory(httpClient: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(
    httpClient,
    './assets/i18n/',
    '.json'
  )
}

export function localizationInitializerFactory(
  translateService: TranslateService,
  localizationService: LocalizationService,
  injector: Injector
) {
  return (): Promise<void> => {
    return localizationService.init(translateService, injector)
  }
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserInterfaceModule,
    EventModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [
          HttpClient
        ]
      }
    })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: localizationInitializerFactory,
      deps: [
        TranslateService,
        LocalizationService,
        Injector
      ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
