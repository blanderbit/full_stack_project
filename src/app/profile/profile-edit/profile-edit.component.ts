import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Profile} from '../../_services/interface';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {ProfileService} from '../../_services/profile.service';
import {nextContext} from '@angular/core/src/render3';
import {Router} from '@angular/router';
@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})

export class ProfileEditComponent implements OnInit {
    marital_status = ['Married', 'Single'];
    age_arr        = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66,
      67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
    gender = ['Man', 'Woomen'];
    // profile: Observable<Profile>;
    profile: any;
    country: any;
    pref = '+' + 380;
    password = '';
    constructor(
        private store: Store<Profile>,
        private fb:    FormBuilder,
        private profile_service: ProfileService,
        private router: Router
    ) {
        profile_service.getCountryAndCode()  ;
    }

  ngOnInit() {
      this.store.select('count').subscribe((next) => {
          this.profile = next.profile;
          this.country = next.country;
      });
  }


  saveEdit () {
      this.profile_service.updateProfile(this.profile.id, this.profile, this.password) ;
      this.router.navigateByUrl(`/profile/${this.profile.id}`);
  }
    uploadFile(e) {
        const value = e.target.value;
        const arr_files = ['.jpg', '.jpeg', '.png', '.svg'];
        let result = false;
        arr_files.forEach(item => {
            if (value.indexOf(item) > -1) result = true;
        });
        if (result) {
            const data = new FormData();
            data.append('image', e.target.files[0]);
            this.profile_service.uploadPhoto(data).subscribe((next: any) => this.profile.photo = next.link);
        } else {
            // incorrect image
        }

    }

}
