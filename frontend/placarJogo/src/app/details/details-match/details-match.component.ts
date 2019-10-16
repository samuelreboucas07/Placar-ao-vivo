import { Component, OnInit } from '@angular/core';
import { HomeServices } from './../../_services/home.service';
import { catchError, filter } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router, ActivatedRoute, RouterEvent, NavigationEnd } from '@angular/router';
import { WebsocketServices } from './../../_services/websocket.service'

@Component({
  selector: 'app-details-match',
  templateUrl: './details-match.component.html',
  styleUrls: ['./details-match.component.css']
})
export class DetailsMatchComponent implements OnInit {
  matches: any;
  match: any;
  
  constructor(private homeServices: HomeServices,
              private websocketServices: WebsocketServices,
              private route: ActivatedRoute,
              ) { }

  ngOnInit() {
  this.websocketServices.listen('match').subscribe((data) => {
    console.log(data)
  })

  const game = this.route.snapshot.paramMap.get('match');
  this.match = JSON.parse(game);
  this.fetchLives()
  }

  fetchLives(){
      this.homeServices.getMatches()
    .pipe(catchError(error => {
      return throwError(error);
    }))
    .subscribe(
      result => {
        this.matches = result.data
      }
    );
  }

  }

