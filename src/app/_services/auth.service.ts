import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { ConstantsService } from './constants.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/internal/operators';
import { TokenService } from './token.service';
import {AuthLogin, User} from './interface';
import {environment} from '../../environments/environment';
// import { AuthLogin } from './user.service';


@Injectable()
export class AuthService {
    isAuthenticated = false;

    public role: any = null;

    constructor(private http: HttpClient,
                private router: Router,
                // private userService: UserService,
                // private consts_service: ConstantsService
    ) {
    }

    signup(user: User): Observable<AuthLogin> {
        return this.http.post('/api/register', user).pipe(
            map((res: AuthLogin): AuthLogin => {
                    // this.destroyAuth();
                    // this.setAuth(res, res.token);
                    return res;
                }
            )
        );
    }
    //
    login(user: User): Observable<AuthLogin> {
        return this.http.post('/api/login', user).pipe(
            map((res: AuthLogin): AuthLogin => {
                    return res;
                }
            )
        );
    }

    signup_social (name: string): void {
        const URL = environment.apiUrl + '/api/login/socialite/' + name;
        document.location.href = URL;
    }

    //
    logout() {
        TokenService.destroyToken()
    }
    //
    // checkAuth(): Observable<boolean> {
    //     const token = TokenService.getToken();
    //     const destroyAuth = (): Observable<boolean> => {
    //         this.destroyAuth();
    //         return of(false);
    //     };
    //
    //     if (token) {
    //         return this.userService.getCurrentUser().pipe(
    //             map(() => {
    //                 this.isAuthenticated = true;
    //                 return true;
    //             }),
    //             catchError(destroyAuth),
    //         );
    //     } else {
    //         destroyAuth();
    //     }
    // }
    //
    //
}

