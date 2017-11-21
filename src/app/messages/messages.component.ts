import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MessagesComponent implements OnInit {
	//ojo! se instancia como publico
	constructor(public messageService : MessageService) { }

	ngOnInit() { }

}
