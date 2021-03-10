import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventModel } from 'src/app/shared/models/event-model';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-manage',
  templateUrl: './event-manage.component.html',
  styleUrls: ['./event-manage.component.scss']
})
export class EventManageComponent implements OnInit {
  public eventForm: FormGroup;
  private event: EventModel;
  public handleMode: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private eventService: EventService,
    private router: Router
  ) { }

  ngOnInit(): void {

    // Get Event from route Resolver
    this.route.data
      .subscribe((data: {event: EventModel}) => {
        this.event = data.event;
        this.handleMode = this.event.id ? 'Mettre à jour' : 'Ajouter';
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

  public save(eventData: any): void {
    console.log(`Receiving ${JSON.stringify(eventData)}`);
    if (this.event.id) {
      this.event.deserialize(eventData);
      this.eventService.update(this.event);
    } else {
      this.eventService.add(this.event.deserialize(eventData));
    }
    this.router.navigate(['/', 'events']);
  }

}
