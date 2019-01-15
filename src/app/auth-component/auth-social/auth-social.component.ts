import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {MatDialog} from '@angular/material';
import {SocialModalComponent} from '../../common/modal/social-modal/social-modal.component';
import {IdentifikatorService, TokenService} from '../../_services/token.service';

@Component({
  selector: 'app-auth-social',
  templateUrl: './auth-social.component.html',
  styleUrls: ['./auth-social.component.scss',  '../auth-component.component.scss']
})
export class AuthSocialComponent implements OnInit {
  email    = '';
  password = '';
  user_id  = '';
  error    = '';
  constructor(
      private active_route:     ActivatedRoute,
      public dialog: MatDialog
              // private rout: Route
  ) { }

  ngOnInit() {
      const params: any = this.active_route.params;
      if (params.value.status === 'ok') {
          this.password = params.value.password;
          this.email    = params.value.email;
          this.user_id  = params.value.id;
          IdentifikatorService.saveAuthId(+this.user_id);
          TokenService.saveToken(params.value.token);
      } else {
          this.error    = params.value.status === 'err' && params.value.message_error;
      }
  }

    openDialog(): void {
        const dialogRef = this.dialog.open(SocialModalComponent, {
            width: '250px',
            data: {
                email   : this.email,
                password: this.password,
                user_id : this.user_id
            }
        });
    }
}
//
