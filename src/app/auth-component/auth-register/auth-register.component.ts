import { Component, OnInit } from '@angular/core';
import {AuthLogin} from '../../_services/interface';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../_services/auth.service';
import {ActivatedRoute} from '@angular/router';
import {ToastService} from '../../_services/ToastService';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss', '../auth-component.component.scss']
})
export class AuthRegisterComponent implements OnInit {
    active: any = {
        register: true,
        login: false
    };
    user: any = this.fb.group({
        nickname:         [''],
        password:         [''],
        confirm_password: [''],
        email:            ['']
    });
    err_email = false;
    constructor(
        private http:             HttpClient,
        private auth_service:     AuthService,
        private active_route:     ActivatedRoute,
        private fb:               FormBuilder,
        private messsage_service: ToastService
    ) { }

    ngOnInit() {

    }
    register() {
        this.errors(this.user.value);
        this.err_email = false;
        if (this.user.valid && this.user.value.confirm_password === this.user.value.password) {
            this.auth_service.signup(this.user.value)
            .subscribe(
                (next: any) => this.messsage_service.AddMessage(next.message, 'success'),
                (err: any) => {
                    this.messsage_service.AddMessage(err.error.errors.email[0], 'danger');
                    this.err_email = true;
                });
        }
    }

    social  (name) {
        this.auth_service.signup_social(name);
    }

    errors (value: any) {
        this.user = this.fb.group({
            nickname:         ['', Validators.required],
            password:         ['', [Validators.minLength(8), Validators.required]],
            confirm_password: ['', Validators.required],
            email:            ['', [Validators.required, Validators.email]]
        });
        this.user.setValue({
            password: value.password,
            email: value.email,
            nickname: value.nickname,
            confirm_password: value.confirm_password
        });
    }
}
