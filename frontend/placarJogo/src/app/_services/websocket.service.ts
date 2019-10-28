import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({ providedIn: 'root' })

export class WebsocketServices{
	socket: any;
	url = environment.apiUrl;

	constructor() {
		this.socket = io(this.url)
	}

	listen(eventName: String) {
		return new Observable((subscriber) => {
			this.socket.on(eventName, (data) => {
				subscriber.next(data);
			})
		})
	}

	emit(eventName: string, data: any) {
		this.socket = io(this.url, { query: {match: data}})
		this.socket.emit(eventName, data)
	}


}