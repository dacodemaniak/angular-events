import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
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
