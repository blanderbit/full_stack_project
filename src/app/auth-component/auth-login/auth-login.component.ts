import {Component, OnInit} from '@angular/core';
import {AuthLogin} from '../../_services/interface';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../_services/auth.service';
import {ActivatedRoute} from '@angular/router';
import {ToastService} from '../../_services/ToastService';
@Component({
    selector: 'app-auth-login',
    templateUrl: './auth-login.component.html',
    styleUrls: ['./auth-login.component.scss', '../auth-component.component.scss']
})
export class AuthLoginComponent implements OnInit {
    active: any = {
        register: false,
        login: true
    };
    user: any = this.fb.group({
        password: [],
        email:    []
    });
    err = false;
    constructor(
        private http:             HttpClient,
        private auth_service:     AuthService,
        private active_route:     ActivatedRoute,
        private fb:               FormBuilder,
        private messsage_service: ToastService
    ) {
    }
    ngOnInit() {}
    login() {
        this.errors(this.user.value);
        if (this.user.valid) {
            this.auth_service.login(this.user.value)
                .subscribe(
                    (next: AuthLogin) => {
                        this.messsage_service.AddMessage('you are logged in', 'success');
                    },
                    (err: any) => {
                        this.messsage_service.AddMessage(
                            'Invalid password or email',
                            'danger');
                        this.err = true;
                    }
                );
        }
    }
    errors(value: any) {
        this.user = this.fb.group({
            password: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]]
        });
        this.user.setValue({
            password: value.password,
            email: value.email
        });
    }

}
