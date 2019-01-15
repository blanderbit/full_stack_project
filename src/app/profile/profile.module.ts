import {ProfileRoutingModule, RoutingComponents} from './Profile-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService} from '../_services/auth.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SocialModalComponent } from '../common/modal/social-modal/social-modal.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {MatModule} from './mat.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {CommonProfileComponents} from './common/common';
import { StoreModule } from '@ngrx/store';
import { Reducer } from '../_redux/reducer';
import {ProfileService} from '../_services/profile.service';
import {ProfileResolver} from './profile.resolver';
import { AvatarModule } from 'ngx-avatar';
import {EventsService} from '../_services/Events.service';
@NgModule({
    declarations: [
        ProfilePageComponent,
        RoutingComponents,
        CommonProfileComponents
    ],
    // exports: [ MatSidenavModule ],
    imports: [
        FormsModule,
        BrowserModule,
        ProfileRoutingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        StoreModule.forRoot({ count: Reducer }),
        AvatarModule,
        MatDatepickerModule
    ],
    entryComponents: [
        //
        // ProfilePageComponent
    ],
    providers: [
        ProfileService,
        ProfileResolver,
        EventsService
    ],
    // bootstrap: [ProfilePageComponent],
})
export class ProfileModule { }
