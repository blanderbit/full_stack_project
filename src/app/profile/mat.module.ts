import { NgModule } from '@angular/core';
import {
    // MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule
} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
@NgModule({
    // imports: [
    //     MatSidenavModule,
    //     MatToolbarModule,
    //     MatIconModule,
    //     MatButtonModule,
    //     MatListModule,
    //     MatProgressBarModule,
    //     MatCardModule
    // ],
    exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatProgressBarModule,
        MatCardModule,
        MatTabsModule,
        MatInputModule,
        MatSelectModule,
        MatNativeDateModule
    ]
})

export class MatModule {}
