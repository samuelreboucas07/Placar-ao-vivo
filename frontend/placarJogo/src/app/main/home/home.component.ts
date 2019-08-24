import { Component, OnInit } from '@angular/core';
import { HomeServices } from './../../_services/home.service';
// import { ToastrService } from 'ngx-toastr';
import { catchError, filter } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeServices: HomeServices) { }

  ngOnInit() {
  	this.homeServices.getMatches()
  	.pipe(catchError(error => {
  		return throwError(error);
  	}))
  	.subscribe(
  		result => {
  			console.log(result.data)
  		}
  	);
  }

}
