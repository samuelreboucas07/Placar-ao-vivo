import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu-shared',
  templateUrl: './menu-shared.component.html',
  styleUrls: ['./menu-shared.component.css']
})
export class MenuSharedComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

management(){
    this.router.navigate(['/home', { outlets: { content: ['admin'] }}])
  }

}
