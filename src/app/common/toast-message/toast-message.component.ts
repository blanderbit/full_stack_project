import { Component, OnInit, DoCheck } from '@angular/core';
import {ToastService} from '../../_services/ToastService';
// import 'bulma/css/bulma.css';
@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.scss']
})
export class ToastMessageComponent implements OnInit, DoCheck {
    timeouts = [];
    messages: any = [];

    constructor(private toast: ToastService) { }

    ngOnInit() {
        // this.messages = this.toast.getMessages();
    }

    ngDoCheck() {
        this.messages = this.toast.getMessages();
        for (let i = 0; i < this.messages.length; i++){
            clearTimeout(this.timeouts[i]);
            const it = this;
            const time = '7000';
            this.timeouts.push(setTimeout(function () {
                it.messages.splice(i, 1);
            }, +time));

        }
    }
    removeMessage (index) {
        clearTimeout(this.timeouts[index]);
        this.messages.splice(index, 1);
    }
}
