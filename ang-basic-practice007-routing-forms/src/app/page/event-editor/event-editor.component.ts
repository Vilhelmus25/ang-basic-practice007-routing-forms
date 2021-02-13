import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Observable } from 'rxjs';
import { EventService } from 'src/app/service/event.service';
import { Event } from 'src/app/model/event';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {

  eventItem: Event = new Event();

  constructor(private eventService: EventService, activatedRoute: ActivatedRoute) {

    activatedRoute.params.subscribe(
      params => {
        this.eventService.get(params.id).forEach(
          eventItem => {
            this.eventItem = eventItem;
            console.log(this.eventItem);
          }
        )
      }
    )
  }

  ngOnInit(): void {

  }
  onFormSubmit(form: NgForm): void {
    console.log(form.value);
  }

}
