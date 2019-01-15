import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Profile} from '../../_services/interface';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent implements OnInit {
    profile: Observable<Profile>;
  constructor(private store: Store<Profile>) { }

  ngOnInit() {
      this.store.select('count').subscribe(next => this.profile = next.profile);
  }

}
