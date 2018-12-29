import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AuthService } from '../_services/auth.service';
import {AuthLogin} from '../_services/interface';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.scss']
})
export class AuthComponentComponent implements OnInit {
    active: any = {
        register: false,
        login: false
    };
    user: any = this.fb.group({
        nickname:         ['', Validators.required],
        email:            ['', Validators.email]
    });
  constructor(
      private http:         HttpClient,
      private auth_service: AuthService,
      private active_route: ActivatedRoute,
      private fb:           FormBuilder
  ) { }

  ngOnInit() {
      this.active[this.active_route.routeConfig.path] = true ;
  }

  register() {
      this.auth_service.signup(this.user)
          .subscribe(
              (next: AuthLogin) => console.log(next),
              (err: any) => console.log(err));
  }

  login() {
      this.auth_service.login(this.user.value)
          .subscribe(
              (next: AuthLogin) => console.log(next),
              (err: any) => console.log(err));
  }

}
