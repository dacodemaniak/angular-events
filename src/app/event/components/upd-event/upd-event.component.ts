import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventModel } from 'src/app/shared/models/event-model';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-upd-event',
  templateUrl: './upd-event.component.html',
  styleUrls: ['./upd-event.component.scss']
})
export class UpdEventComponent implements OnInit {

  public eventForm: FormGroup;
  public priorities: Map<string, any> = new Map();
  private event: EventModel;

  constructor(
    private routerSnapshot: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private eventService: EventService
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
    this.routerSnapshot.params.subscribe((params: any) => {
      console.log(JSON.stringify(params.id));

      // Get event from Service
      this.event = this.eventService.findOne(+params.id);

      this.eventForm = this.formBuilder.group({
        title: [
          this.event.title,
          Validators.required
        ],
        detail: [
          this.event.detail
        ],
        priority: [
          this.event.priority,
          Validators.required
        ]
      });
    })
  }

  public upd(): void {
    this.event = this.event.deserialize(this.eventForm.value);
    this.eventService.update(this.event);
    this.router.navigate(['/', 'events']);
  }
}
