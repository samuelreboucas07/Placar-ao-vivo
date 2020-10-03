import { Component, OnInit } from '@angular/core';
import { HomeServices } from './../../_services/home.service';
import { catchError, filter } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router, ActivatedRoute, RouterEvent, NavigationEnd } from '@angular/router';
import { WebsocketServices } from './../../_services/websocket.service'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details-match',
  templateUrl: './details-match.component.html',
  styleUrls: ['./details-match.component.css']
})
export class DetailsMatchComponent implements OnInit {
  matches: any; //Partidas da barra superior
  match: any;   //Partida principal
  detailsForm: FormGroup;
  supportersTeamA: any;
  constructor(private homeServices: HomeServices,
              private websocketServices: WebsocketServices,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              ) { }

  ngOnInit() {
  this.websocketServices.listen('score').subscribe((data) => {
    this.matches = data['matches']
    if(data['match'] == this.match.id){
      this.match = data['matches'][data['match']]
    }
  })
  this.websocketServices.listen('supporters').subscribe((data) => {
    this.supportersTeamA = data
  })
  const game = this.route.snapshot.paramMap.get('match');
  this.match = JSON.parse(game);
  const supporters = this.match.teamA.supporters + this.match.teamB.supporters
  this.supportersTeamA = (this.match.teamA.supporters/supporters)*100;
  this.fetchLives()
  this.websocketServices.emit('match', this.match.id)

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

