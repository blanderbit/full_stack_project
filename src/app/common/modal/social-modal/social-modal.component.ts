import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Router} from '@angular/router';
import {IdentifikatorService} from '../../../_services/token.service';
export interface DialogData {
    email   : string;
    password: string;
    user_id : number;
}
@Component({
  selector: 'app-social-modal',
  templateUrl: './social-modal.component.html',
  styleUrls: ['./social-modal.component.scss']
})
export class SocialModalComponent implements OnInit {


    constructor(
        public dialogRef: MatDialogRef<SocialModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        private router: Router) {}
    ngOnInit() {
    }


    onNoClick(): void {
        this.dialogRef.close();
    }
    continue_and_to_profile() {
        IdentifikatorService.saveAuthId(this.data.user_id);
        this.onNoClick();
        this.router.navigateByUrl(`profile/${this.data.user_id}`);
    }
}
