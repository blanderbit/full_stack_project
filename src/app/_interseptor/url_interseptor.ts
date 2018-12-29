import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const API_URL = environment.apiUrl;
        request = request.clone({
            url: API_URL + request.url,
        });
        return next.handle(request);
    }
}
