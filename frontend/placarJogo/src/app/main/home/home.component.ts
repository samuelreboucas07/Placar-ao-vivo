import { Component, OnInit } from '@angular/core';
import { HomeServices } from './../../_services/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeServices: HomeServices) { }

  ngOnInit() {
  	console.log(this.homeServices.getMatches())
  }

}
