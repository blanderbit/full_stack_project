import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {ProfileUserComponent} from './profile-user/profile-user.component';
import {ProfileEditComponent} from './profile-edit/profile-edit.component';
import {ProfileResolver} from './profile.resolver';
import {EventsPageComponent} from './events-page/events-page.component';
import {ChatComponentsComponent} from './chat-components/chat-components.component';

export const RoutingComponents = [
    ProfilePageComponent,
    ProfileUserComponent,
    ProfileEditComponent,
    EventsPageComponent,
    ChatComponentsComponent
];

const routes: Routes = [
    {
        path: 'profile', component: ProfilePageComponent, resolve: {
            project: ProfileResolver
        },
        children: [
            {path: 'events', component: EventsPageComponent},
            {path: ':id', component: ProfileUserComponent},
            {path: ':id/edit', component: ProfileEditComponent},
        ]
    },
    {path: 'chat', component: ChatComponentsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }
