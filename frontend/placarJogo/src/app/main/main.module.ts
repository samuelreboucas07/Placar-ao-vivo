import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MenuSharedComponent } from './menu-shared/menu-shared.component';
import { RouterModule } from '@angular/router';
import { MainRoutingModule } from './main-routing.module';


@NgModule({
  declarations: [MenuSharedComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    MainRoutingModule

  ]
})
export class MainModule { }
