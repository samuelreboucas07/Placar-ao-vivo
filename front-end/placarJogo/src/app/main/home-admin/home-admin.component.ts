import { Component, OnInit, Inject, ElementRef, ViewChild} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HomeServices } from './../../_services/home.service';
import { catchError, filter } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { WebsocketServices } from './../../_services/websocket.service'

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  matches = []
  resultForm:  FormGroup;
  loading = false;
  constructor(@Inject(DOCUMENT) public document,
              public elementRef: ElementRef,
              private formBuilder: FormBuilder,
              private homeServices: HomeServices,
              private websocketServices: WebsocketServices) { }

  ngOnInit() {
  this.resultForm = this.formBuilder.group({
    goalTeamA: [''],
    goalTeamB: ['']
  })
  this.websocketServices.listen('score').subscribe((data) => {
    this.matches = data['matches']
  })
  this.homeServices.getMatches()
  .pipe(catchError(error => {
		return throwError(error)
  }))
  .subscribe(
  	result => {
  		this.matches = result.data
  	})
  }
  
  get f() { return this.resultForm.controls; }

  management(match){
    this.f.goalTeamA.setValue(match.teamA.score)
    this.f.goalTeamB.setValue(match.teamB.score)
  }

  update(match){
    this.loading = true;
    this.homeServices.updateResultMatch(this.resultForm.value, match.id)
    .pipe(catchError(error => {
      return throwError(error)
    }))
    .subscribe(
      result => {
        if(result.status == "success"){
          this.loading = false;
        }
      })
  }

}
