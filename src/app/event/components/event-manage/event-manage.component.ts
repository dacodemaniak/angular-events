import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-manage',
  templateUrl: './event-manage.component.html',
  styleUrls: ['./event-manage.component.scss']
})
export class EventManageComponent implements OnInit {
  public eventForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.eventForm = this.formBuilder.group({
      title: [
        '',
        Validators.required
      ],
      detail: [
        ''
      ],
      priority: [
        3,
        Validators.required
      ]
    });
  }

}
