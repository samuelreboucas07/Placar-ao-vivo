import { Component, OnInit, Inject, ElementRef, ViewChild} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HomeServices } from './../../_services/home.service';
// import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, RouterEvent, NavigationEnd } from '@angular/router';
import { catchError, filter } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  matches: any

  constructor(@Inject(DOCUMENT) public document,
              public elementRef: ElementRef,
              private homeServices: HomeServices,
              private route: ActivatedRoute,
              private router: Router) { }
  
  ngOnInit() {
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

  viewMatch(match){
    this.router.navigate(['/home', { outlets: { content: ['match', {match: JSON.stringify(match)} ] }}])
  }


}
