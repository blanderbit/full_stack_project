import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthRoutingModule, RoutingComponents } from './auth-routing.module';
import { AuthService} from '../_services/auth.service';
import { AuthComponentComponent} from './auth-component.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatDialogModule, MatFormFieldModule} from '@angular/material';
import { SocialModalComponent } from '../common/modal/social-modal/social-modal.component';


@NgModule({
  declarations: [
      AuthComponentComponent,
      RoutingComponents,
      SocialModalComponent
  ],
    exports: [ SocialModalComponent ],
  imports: [
      FormsModule,
      BrowserModule,
      AuthRoutingModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatFormFieldModule,
      MatDialogModule
  ],
    entryComponents: [
        SocialModalComponent
    ],
  providers: [
      AuthService,
  ],
})
export class AuthModule { }
