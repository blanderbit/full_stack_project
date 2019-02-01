import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {HttpClient} from '@angular/common/http';
import {Actions, ClearEvents, GetEvents, GetProfile, PaginateEvents, UpdateEvents} from '../../_redux/action';
import {EventsService} from '../../_services/Events.service';
import {ProfileService} from '../../_services/profile.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss', '../profile-page/profile-page.component.scss']
})
export class EventsPageComponent implements OnInit, OnDestroy {
    events: any = [];
    text_comment: any = '';
    paginate: any ;
    count = 1;
    constructor(
        private http: HttpClient,
        private router: Router,
        private store: Store<Actions>,
        private event_service: EventsService,
        private profile_service: ProfileService,
    ) {}

    ngOnInit() {
        this.event_service.getEvents();
        this.store.select('count').subscribe(next => {
            this.events   = next.events;
            this.paginate = next.paginate;
        });
    }
    toggleLike (id_event, index) {
        this.event_service.toggleLike(id_event).subscribe((next: any) => {
            this.events[index].like_user_event = next.message === 'like create' ? next : null;
            this.events[index].likes_count = next.message === 'like create' ?
                this.events[index].likes_count + 1 :
                this.events[index].likes_count - 1;
        });
    }
    openOneEvent (index) {
        this.profile_service.modal_toggle('active_event_read_mode_modal', index);
    }
    onEnter (id_event, text, count) {
        const data = {
            text_comment: text
        };
        this.event_service.addCommentForEvent(id_event, data).subscribe((next: any) => {
            if (next.message === 'ok') {
                text = '';
                count.comment_count += 1;
            }
        });
    }
    lazyLoad() {
        this.paginate.last_page !== this.paginate.current_page &&
        this.event_service.getEvents(this.paginate.current_page + 1);
    }
    ngOnDestroy() {
        this.store.dispatch(new ClearEvents([]));
        this.store.dispatch(new PaginateEvents({}));
    }
}
