import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: String = new String('events');


  public constructor(
    private titleService: Title,
    private translateService: TranslateService
  ) {
    this.titleService.setTitle(this.translateService.instant('appTitle'));
  }

}
