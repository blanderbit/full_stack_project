import {Router} from '@angular/router';
import {Injectable, Injector} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {AuthService} from '../_services/auth.service';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
import {ToastService} from '../_services/ToastService';


@Injectable()
export class ServerErrorsInterceptor implements HttpInterceptor {
    private authService: AuthService;

    constructor(private injector: Injector,
                private router: Router,
    private messsage_service: ToastService) {
    }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // this.authService = this.injector.get(AuthService);
        return next.handle(request)
            .pipe(
            catchError((err: HttpErrorResponse) => {
                return this.handleError(err);
            }));
    }

    private handleError(err: HttpErrorResponse): Observable<any> {
        //   500: 'Internal Server Error',
        //   400: 'Bad Request',
        //   401: 'Unauthorized',
        //   403: 'Forbidden',
        //   404: 'Not Found',
        //   405: 'Method Not Allowed',
        //   422: 'Unprocessable Entity',
        switch (err.status) {
            case 401:
                // this._handleUnauthorized();
                return throwError(err);
            default:
                return throwError(err);
        }
    }

    private _handleUnauthorized() {
        // this.authService.destroyAuth();
        // this.router.navigate(['/log-in']);
    }

}
