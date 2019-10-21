import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsMatchComponent } from './details-match/details-match.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';



@NgModule({
  declarations: [DetailsMatchComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DetailsModule { }
