import {NgModule} from '@angular/core';
import {ToastMessageComponent} from './toast-message/toast-message.component';
import {SocialModalComponent} from './modal/social-modal/social-modal.component';

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

export class Common { }
export const CommonComponents = [
    ToastMessageComponent,
    SocialModalComponent,
];
