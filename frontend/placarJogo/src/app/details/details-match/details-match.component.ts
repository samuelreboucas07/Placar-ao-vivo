import { Component, OnInit } from '@angular/core';
import { HomeServices } from './../../_services/home.service';
import { catchError, filter } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-details-match',
  templateUrl: './details-match.component.html',
  styleUrls: ['./details-match.component.css']
})
export class DetailsMatchComponent implements OnInit {
  matches: any

  constructor(private homeServices: HomeServices) { }

  ngOnInit() {
	this.homeServices.getMatches()
  	.pipe(catchError(error => {
  		return throwError(error);
  	}))
  	.subscribe(
  		result => {
        this.matches = result.data
        console.log(this.matches)
  		}
  	);
  }

}
