import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiUrlInterceptor } from './_interseptor/url_interseptor';
import { HttpTokenInterceptor } from './_interseptor/token_interseptor';
import { ServerErrorsInterceptor } from './_interseptor/server_errors_interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthService} from './_services/auth.service';
import {AuthModule} from './auth-component/auth.module';
import {CommonComponents} from './common/common';
import {ToastService} from './_services/ToastService';
import {ToastMessageComponent} from './common/toast-message/toast-message.component';


@NgModule({
  declarations: [
      AppComponent,
      ToastMessageComponent,
    // AuthComponentComponent,
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      AuthModule,
  ],
  providers: [
      ToastService,
      AuthService,
      {
          provide: HTTP_INTERCEPTORS,
          useClass: ApiUrlInterceptor,
          multi: true,
      },
      {
          provide: HTTP_INTERCEPTORS,
          useClass: ServerErrorsInterceptor,
          multi: true,
      },
      {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpTokenInterceptor,
          multi: true,
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
