import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EventInterface } from './shared/models/interfaces/event-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: String = new String('events');
  public events: EventInterface[] = [];

  public constructor(
    private titleService: Title
  ) {
    this.events.push(
      {
        title: 'Découvrir le framework Angular',
        beginAt: new Date(),
        priority: 3
      },
      {
        title: 'Directive de structure ngFor',
        beginAt: new Date(),
        priority: 3
      },
      {
        title: 'Directive de structure ngIf',
        beginAt: new Date(),
        priority: 1
      },
    );
    this.titleService.setTitle('Liste des événements');
  }

  public addEvent(): void {
    this.events.push({
      title: 'Schematics',
      detail: 'Use ng g to generate Angular schematic',
      beginAt: new Date(),
      priority: 3
    });
    this.titleService.setTitle(`Liste des événements - ${this.events.length}`)
  }

}
