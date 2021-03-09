import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EventModel } from 'src/app/shared/models/event-model';
import { EventModule } from '../../event.module';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  public eventForm: FormGroup;
  public priorities: Map<string, any> = new Map();

  private readonly snackBarConfig: MatSnackBarConfig = {
    verticalPosition: 'top',
    horizontalPosition: 'center',
    duration: 2000
  }

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  public get title(): AbstractControl {
    return this.eventForm.controls.title;
  }

  public get priority(): AbstractControl {
    return this.eventForm.controls.priority;
  }

  ngOnInit(): void {
    // Feed priorities
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

  public add(): void {
    const event: EventModel = new EventModel().deserialize(this.eventForm.value)
    this.eventService.add(event);
    this.router.navigate(['/', 'events']);

    // Load SnackBar
    this.snackBar.open(`"${event.title}" a été ajouté`, null, this.snackBarConfig);
  }
}
