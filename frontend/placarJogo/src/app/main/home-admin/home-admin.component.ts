import { Component, OnInit, Inject, ElementRef, ViewChild} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HomeServices } from './../../_services/home.service';
import { catchError, filter } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  matches = []
  constructor(@Inject(DOCUMENT) public document,
              public elementRef: ElementRef,
              private homeServices: HomeServices) { }

  ngOnInit() {
  this.homeServices.getMatches()
  .pipe(catchError(error => {
		return throwError(error)
  }))
  .subscribe(
  	result => {
  		this.matches = result.data
  	})
  }

}
