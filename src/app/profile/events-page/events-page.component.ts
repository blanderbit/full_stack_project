import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {HttpClient} from '@angular/common/http';
import {Actions, GetEvents, GetProfile, UpdateEvents} from '../../_redux/action';
import {EventsService} from '../../_services/Events.service';
import {ProfileService} from '../../_services/profile.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss', '../profile-page/profile-page.component.scss']
})
export class EventsPageComponent implements OnInit {
    events: any = [];
    text_comment: any = '';
    constructor(private http: HttpClient,
                private router: Router,
                private store: Store<Actions>,
                private event_service: EventsService,
                private profile_service: ProfileService,
                // private consts_service: ConstantsService
    ) {

    }

    ngOnInit() {
        this.event_service.getEvents();
        this.store.select('count').subscribe(next => {
            this.events = next.events;
        });
    }
    toggleLike (id_event) {
        this.event_service.toggleLike(id_event).subscribe((next: any) => {
            this.event_service.getEvents();
        });
    }
    openOneEvent (index) {
        this.profile_service.modal_toggle('active_event_read_mode_modal', index);
    }
    onEnter (id_event, text) {
        const data = {
            text_comment: text
        };
        this.event_service.addCommentForEvent(id_event, data).subscribe((next: any) => {
            console.log(next);
            text = '';
            this.event_service.getEvents();
        });
    }
}
