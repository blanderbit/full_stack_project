import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {MatDialog} from '@angular/material';
import {SocialModalComponent} from '../../common/modal/social-modal/social-modal.component';

@Component({
  selector: 'app-auth-social',
  templateUrl: './auth-social.component.html',
  styleUrls: ['./auth-social.component.scss',  '../auth-component.component.scss']
})
export class AuthSocialComponent implements OnInit {
  email    = '';
  password = '';
  error    = '';
  constructor(
      private active_route:     ActivatedRoute,
      public dialog: MatDialog
              // private rout: Route
  ) { }

  ngOnInit() {
       const params: any = this.active_route.params;
      this.password = params.value.status === 'ok'  && params.value.password;
      this.email    = params.value.status === 'ok'  && params.value.email;
      this.error    = params.value.status === 'err' && params.value.message_error;
  }


    constructor() {}

    openDialog(): void {
        const dialogRef = this.dialog.open(SocialModalComponent, {
            // height: '400px',
            width: '250px',
            data: {email: this.email, password: this.password}
        });

        // dialogRef.afterClosed().subscribe(result => {
        //     console.log('The dialog was closed');
        //     this.animal = result;
        // });
    }

}
//
