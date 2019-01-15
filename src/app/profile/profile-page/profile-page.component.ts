import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../_services/profile.service';
import {Actions} from '../../_redux/action';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Profile} from '../../_services/interface';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  profile: Observable<Profile>;
  sidebar = [
      {
          name: 'Profile',
          img:  'profile_img',
          path: '',
      },
      {
          name: 'Event',
          img:  'event_img',
          path: 'profile/events'
      },
      {
          name: 'Message',
          img:  'message_img',
      },
      {
          name: 'Settings',
          img:  'settings_img',
      },
  ];
  sidebar_down = [
      {
          img:  'help_img',
          name: 'Help',
      },
      {
          name: 'log out',
          img:  'logout_img',
      },
  ];

  constructor(private store: Store<Profile>) {}

  ngOnInit() {
    this.store.select('count').subscribe(next => this.profile = next.profile);
  }

}
