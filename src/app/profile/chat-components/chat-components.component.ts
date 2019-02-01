import { Component, OnInit } from '@angular/core';
import Echo from 'laravel-echo/dist/echo';
import {HttpClient} from '@angular/common/http';
import * as io from 'socket.io-client';
import {TokenService} from '../../_services/token.service';
// import * as Echo from 'laravel-echo';
// declare module 'laravel-echo';
// declare global {
//     // interface Window { io: any; }
//     // interface Window { Echo: any; }
// }
declare var window: any;
//
// declare var Echo: any;

// window.io = window.io || io;
// window.Echo = window.Echo || Echo;
@Component({
  selector: 'app-chat-components',
  templateUrl: './chat-components.component.html',
  styleUrls: ['./chat-components.component.scss']
})
export class ChatComponentsComponent implements OnInit {
  chat_messages = [];
  message;
  constructor(private http: HttpClient) { }

  ngOnInit() {
      window.io = io;
      window.Echo =  new Echo({
          authEndpoint : 'http://127.0.0.1:8000/broadcasting/auth',
          broadcaster: 'socket.io',
          host: 'http://localhost:6001',
          auth: {
              headers: {
                  'Authorization': `Bearer ${TokenService.getToken()}`
              }
          }
      });
      window.Echo.private('chat.4')
          .listen('Chat', ({data}) => {
              console.log('From laravel echo: ', data);
          });
  }
  send(text) {
      this.http.post('/api/message', {message: text, chat_id : 4})
          .subscribe(n => console.log(n),
                  er => console.log(er));
  }

}
