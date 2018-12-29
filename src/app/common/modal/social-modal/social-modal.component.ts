import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
export interface DialogData {
    email:    string;
    password: string;
}
@Component({
  selector: 'app-social-modal',
  templateUrl: './social-modal.component.html',
  styleUrls: ['./social-modal.component.scss']
})
export class SocialModalComponent implements OnInit {


    constructor(
        public dialogRef: MatDialogRef<SocialModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
    ngOnInit() {
    }


    onNoClick(): void {
        this.dialogRef.close();
    }
}
