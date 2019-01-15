import { Injectable } from '@angular/core';
import {ActivatedRoute, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
// import { User, UserService } from '../_services/user.service';
import { Observable, of , pipe} from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import {Profile} from '../_services/interface';
import {ProfileService} from '../_services/profile.service';
import {IdentifikatorService} from '../_services/token.service';
import {Actions} from '../_redux/action';
import {Store} from '@ngrx/store';

@Injectable()
export class ProfileResolver implements Resolve<Profile> {
    constructor(
                private router: Router,
                private profile_service: ProfileService,
                private store: Store<Actions>,
                private active_route:     ActivatedRoute,) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Profile> {
        // +IdentifikatorService.getAuthId() !== +state.url.split('/')[2] && this.router.navigateByUrl('not-found');
        this.profile_service.getProfile(IdentifikatorService.getAuthId());
        return;
    }
}
