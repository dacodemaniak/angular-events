import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
  @Input() public eventForm: FormGroup;

  public priorities: Map<string, any> = new Map();

  public get c(): any {
    return this.eventForm.controls;
  }

  constructor() { }

  ngOnInit(): void {
    this.priorities
    .set(
      'Basse',
      {
        value: 1
      }
    ).set(
      'Moyenne',
      {
        value: 2
      }
    ).set(
      'Haute',
      {
        value: 3
      }
    );
  }
  public save(): void {}

}
