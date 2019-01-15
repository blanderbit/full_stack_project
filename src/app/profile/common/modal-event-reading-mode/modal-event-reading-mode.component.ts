import {Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {EventsService} from '../../../_services/Events.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {ProfileService} from '../../../_services/profile.service';
import {HttpClient} from '@angular/common/http';
import {Actions} from '../../../_redux/action';
import {normalizeAnimationEntry} from '@angular/animations/browser/src/util';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-modal-event-reading-mode',
  templateUrl: './modal-event-reading-mode.component.html',
  styleUrls: ['./modal-event-reading-mode.component.scss',
      '../modal-events/modal-events.component.scss',
      '../../profile-page/profile-page.component.scss',
      '../../events-page/events-page.component.scss']
})
export class ModalEventReadingModeComponent implements OnInit, DoCheck, OnDestroy {
    active_event_read_mode_modal = false;
    selected = new FormControl(0);
    count = 0;
    data: any = {
        event: null,
        likes: null,
        comments: null,
    };
    pagination: any = {
        likes: {},
        comments: {}
    };
    id = null;
    selectedTabIndex: number = 0;
    timeparts = [
        {name: 'millenni', div: 31556736000, p: 'a', s: 'um'},
        {name: 'centur', div: 3155673600, p: 'ies', s: 'y'},
        {name: 'decade', div: 315567360},
        {name: 'year', div: 31556736},
        {name: 'month', div: 2629728},
        {name: 'day', div: 86400},
        {name: 'hour', div: 3600},
        {name: 'minute', div: 60},
        {name: 'second', div: 1}
    ];
    constructor(
        private profile_service: ProfileService,
        private http: HttpClient,
        private router: Router,
        private store: Store<Actions>,
        private event_service: EventsService
    ) { }

    ngOnInit() {

    }
    ngOnDestroy() {}
    ngDoCheck() {

        this.active_event_read_mode_modal = this.profile_service.modal_data('active_event_read_mode_modal');
        this.id = this.profile_service.modal_id_data('active_event_read_mode_modal');

        if(this.id == null) this.count = 0;
        if (this.id != null && this.count === 0) {
             this.count = 1;
             this.subscribers(this.event_service.getEvent(this.id), 'event');
        }
    }
    modal_close () {
        this.profile_service.modal_toggle('active_event_read_mode_modal');
    }
    selectedIndexChange(index: number) {
        setTimeout(() => this.selectedTabIndex = index);
    }
    tabClick(event: MouseEvent) {
        let el = event.srcElement;
        const attr = el.attributes.getNamedItem('class');
        if (attr.value.indexOf('mat-tab-label-content') >= 0) {
            el = el.parentElement;
        }
        const tabIndex = el.id.substring(el.id.length - 1);
        parseInt(tabIndex) === 0 ? this.subscribers(
            this.event_service.getEvent(this.id),
            'event',
        ) : null;
        parseInt(tabIndex) === 1 ? this.subscribers(
            this.event_service.getLikeForEvent(this.id),
            'likes',
        ) : null;
        parseInt(tabIndex) === 2 ? this.subscribers(
            this.event_service.getCommentForEvent(this.id),
            'comments',
        ) : null;
    }
    subscribers(observers: any, name: string) {
          observers.subscribe(next => {

              const pivot_data = next;
              if (name === 'likes' || name === 'comments') {
                  this.data[name] = next.data;
                  delete pivot_data['data'];
                  this.pagination[name] = pivot_data;
              } else {
                  this.data[name] = next;
              }

          });
    }

    getMore (name) {
        switch (name) {
            case 'likes': this.subscribers(
                this.event_service.getLikeForEvent(this.id, this.pagination[name].next_page_url),
                'likes');
                break;
            case 'comments': this.subscribers(
                this.event_service.getCommentForEvent(this.id, this.pagination[name].next_page_url),
                'likes');
                break;
        }
    }

    time_ago(time) {
        return this.timeAgoNaive2(new Date(Date.parse(time)));
    }

    timeAgoNaive2(comparisonDate) {
        let parts = [],
            interval = Math.floor((new Date().getTime() - comparisonDate.getTime()) / 1000),
            value;
        let now_day = {
            day: null,
            time: null
        };
        for (let i = 0 ; i < 9; i += 1) {
            value = Math.floor(interval / this.timeparts[i].div);
            interval = interval - (value * this.timeparts[i].div);
            if (i === 5) {
                now_day.time = value;
                now_day.day = 5;
            }
            if (i === 6 && this.timeparts[i].name === 'hour' && now_day.time === 0 && now_day.day === 5) value -= 2;
            // debugger;
            if (value) {
                // if(parts.length === 1) break;
                parts.push(value + ' ' + this.timeparts[i].name + (value !== 1 ? this.timeparts[i].p || 's' : this.timeparts[i].s || ''));
            }
        }
        if (parts.length === 0) { return 'now'; }
        return parts.join(', ') + ' ago';
    }
}

