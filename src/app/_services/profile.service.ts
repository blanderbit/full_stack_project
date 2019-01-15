import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/internal/operators';
import {AuthLogin, User} from './interface';
import {environment} from '../../environments/environment';
import { Store } from '@ngrx/store';
import {Actions, GetCountryAndCode, GetProfile} from '../_redux/action';


@Injectable()
export class ProfileService {
    modals = {
        modal_add_event: false,
        active_event_read_mode_modal: false,
    };
    index = {
        modal_add_event: null,
        active_event_read_mode_modal: null,
    };
    constructor(private http: HttpClient,
                private router: Router,
                private store: Store<Actions>,
                // private userService: UserService,
                // private consts_service: ConstantsService
    ) {
    }

    getProfile(id: number) {
        return this.http.get(`/api/profile/${id}`)
            .subscribe( (next: any) => Object.keys(next).length === 0 ?
               this.router.navigateByUrl('no-found')  : this.store.dispatch(new GetProfile(next)));

    }

    getCountryAndCode() {
        return this.http.get(`/api/country`)
            .subscribe( (next: any) => this.store.dispatch(new GetCountryAndCode(next.data)));

    }

    updateProfile (id: number, data: any, password: string) {
        return this.http.post(`/api/update_profile/${id}`,{
            password,
            data
        })
        .subscribe( (next: any) => this.store.dispatch(new GetProfile(next.profile)));
    }

    uploadPhoto (data: any) {
        return this.http.post(`/api/fileUpload`, data);
            // .subscribe( (next: any) => this.store.dispatch(new GetProfile(next.profile)));
    }

    modal_toggle(modal, index = null) {
        this.modals[modal] = !this.modals[modal];
        this.index[modal] = this.modals[modal] ? index : null;
    }
    modal_data(modal) {
        return this.modals[modal];
    }
    modal_id_data(modal) {
        return this.index[modal];
    }
}

