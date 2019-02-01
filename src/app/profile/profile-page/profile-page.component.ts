import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../_services/profile.service';
import {Actions, ClearEvents, GetEvents, PaginateEvents} from '../../_redux/action';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Profile} from '../../_services/interface';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
      profile: any;
      sidebar = [
          {
              name: 'Profile',
              img:  'profile_img',
              path: `profile`,
          },
          {
              name: 'Event',
              img:  'event_img',
              path: '/profile/events'
          },
          {
              name: 'Message',
              img:  'message_img',
              path: '/profile/chat'
          },
          {
              name: 'Settings',
              img:  'settings_img',
              path: '/settings'
          },
      ];
      sidebar_down = [
          {
              img:  'help_img',
              name: 'Help',
              path: '/help'
          },
          {
              name: 'log out',
              img:  'logout_img',
          },
      ];

      constructor(
          private store: Store<Profile>,
      ) {}

      ngOnInit() {
        this.store.select('count').subscribe(next => this.profile = next.profile);
      }


}
