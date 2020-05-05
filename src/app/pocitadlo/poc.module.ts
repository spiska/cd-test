import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PocitadloComponent } from './pocitadlo.component';



@NgModule({
  declarations: [PocitadloComponent],
  exports: [PocitadloComponent],
  imports: [
    CommonModule
  ]
})
export class PocModule { }
