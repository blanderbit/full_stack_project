import { NgModule } from '@angular/core';
import {
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
    MatCardModule,
} from '@angular/material';

@NgModule({
    imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatProgressBarModule,
        MatCardModule
    ],
    exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatProgressBarModule,
        MatCardModule
    ]
})

export class MatModule {}
