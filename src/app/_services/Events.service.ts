import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/internal/operators';
import {AuthLogin, User} from './interface';
import {environment} from '../../environments/environment';
import { Store } from '@ngrx/store';
import {Actions, GetCountryAndCode, GetEvents, GetProfile, PaginateEvents} from '../_redux/action';
import {IdentifikatorService} from './token.service';


@Injectable()
export class EventsService {
    id =        IdentifikatorService.getAuthId();
    constructor(
         private http: HttpClient,
         private router: Router,
         private store: Store<Actions>,
    ) {}

    getEvents(next: number = null) {
        const url = next == null ? `/api/get_events` : `/api/get_events?page=${next}`;
        return this.http.get(url)
            .subscribe((e: any) =>  {
                    this.store.dispatch(new GetEvents(e.data));
                    delete e.data;
                    this.store.dispatch(new PaginateEvents(e));
                },
                (err: any) => console.log(err) );
    }

    addEvent(data: any) {
        return this.http.post(`/api/profile/${this.id}/add_events`, data);
    }
    getEvent(id_event: number) {
        return this.http.get(`/api/get_event/${id_event}`);
    }
    getLikeForEvent (id_event: number, next_page: number = null) {
        const url = `/api/event/${id_event}/get_likes?page=${next_page}`;
        return this.http.get(url);
    }
    getCommentForEvent (id_event: number, next_page: number = null) {
        const url = `/api/profile/get_comment_for_event/${id_event}?page=${next_page}`;
        return this.http.get(url);
    }
    toggleLike(id_event: number) {
        return this.http.post(`/api/event/toggle_like_for_event/${id_event}`, {id_user: this.id});
    }
    addCommentForEvent(id_event: number, data: any) {
        data.user_id = this.id;
        return this.http.post(`/api/profile/add_comment_for_event/${id_event}`, data);
    }
}
