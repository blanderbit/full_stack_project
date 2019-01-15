import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss',
      // '../../../../../node_modules/materialize-css/dist/css/materialize.css'
  ]
})
export class InfoModalComponent implements OnInit {
    active = false;
  constructor() { }

  ngOnInit() {
  }

}
