import { Component, OnInit, Input } from '@angular/core';
import {Store} from '@ngrx/store';
import {Profile} from '../../../_services/interface';
import {ProfileService} from '../../../_services/profile.service';

@Component({
  selector: 'app-profile-navbar',
  templateUrl: './profile-navbar.component.html',
  styleUrls: ['./profile-navbar.component.scss']
})
export class ProfileNavbarComponent implements OnInit {
    // links = ['Your project', 'Team project'];
    profile: any;
  constructor(private store: Store<Profile>,
    private profile_service: ProfileService) { }

  ngOnInit() {
      this.store.select('count').subscribe(next => this.profile = next.profile);
  }
    open_modal_event(){
        this.profile_service.modal_toggle('modal_add_event');
    }

}
