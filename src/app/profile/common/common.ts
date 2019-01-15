
import {NgModule} from '@angular/core';
import {ProfileNavbarComponent} from './profile-navbar/profile-navbar.component';
import {ModalEventsComponent} from './modal-events/modal-events.component';
import {InfoModalComponent} from './info-modal/info-modal.component';
import {ModalEventReadingModeComponent} from './modal-event-reading-mode/modal-event-reading-mode.component';


@NgModule({
    declarations: [

    ],
    imports: [
        // MatModule
    ],
    providers: [

    ],
    bootstrap: [],
})

export class CommonProfile { }
export const CommonProfileComponents = [
    ProfileNavbarComponent,
    ModalEventsComponent,
    InfoModalComponent,
    ModalEventReadingModeComponent
];
