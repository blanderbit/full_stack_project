import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { TokenService } from '../_services/token.service';
import { Observable } from 'rxjs';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
    constructor() {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = TokenService.getToken();

        if (token) {
            request = request.clone({
                setHeaders: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': `application/json`,
                },
            });
        }
        return next.handle(request);
    }
}
