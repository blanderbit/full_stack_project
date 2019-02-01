import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {ProfileService} from '../../../_services/profile.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {IdentifikatorService, TokenService} from '../../../_services/token.service';
import {Actions, GetCountryAndCode, GetEvents, UpdateEvents} from '../../../_redux/action';
import {Store} from '@ngrx/store';
import {EventsService} from '../../../_services/Events.service';

@Component({
  selector: 'app-modal-events',
  templateUrl: './modal-events.component.html',
  styleUrls: ['./modal-events.component.scss']
})
export class ModalEventsComponent implements OnInit, DoCheck {
    active = false;

    data = {
        event_name: null,
        about_event: null,
        location: null,
        member: 1,
        deadline: null,
        link: null,
    };
  constructor(private profile_service: ProfileService,
              private http: HttpClient,
              private router: Router,
              private store: Store<Actions>,
              private event_service: EventsService) { }

  ngOnInit() {
  }
    uploadFile(e){
        const value = e.target.value;
        const arr_files = ['.jpg', '.jpeg', '.png', '.svg'];
        let result = false;
        arr_files.forEach(item => {
            if (value.indexOf(item) > -1) result = true;
        });
        if (result) {
            const data = new FormData();
            data.append('image', e.target.files[0]);
            this.profile_service.uploadPhoto(data).subscribe((next: any) => this.data.link = next.link);
        } else {
            // incorrect image
        }
    }
    ngDoCheck() {
        this.active = this.profile_service.modal_data('modal_add_event');
    }
    modal_close() {
        this.profile_service.modal_toggle('modal_add_event');
    }
    addEvent() {
        this.event_service.addEvent(this.data)
            .subscribe( (next: any) => {
                console.log(next);
                this.modal_close();
                Object.keys(this.data).forEach(item => this.data[item] = null);
                this.store.dispatch(new GetEvents(next.event));
            },
            (err: any) => console.log(err));
    }
}
