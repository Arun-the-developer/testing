import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CricketComponent } from './cricket/cricket.component';

@NgModule({
  declarations: [
  CricketComponent],
  imports: [
    CommonModule
  ]
})
export class SportsModule { 
  constructor(){
    console.log('Arun');
   }
}
