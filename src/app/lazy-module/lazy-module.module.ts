import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyModuleRoutingModule } from './lazy-module-routing.module';
import { LazyModuleComponent } from './lazy-module.component';
import { PocModule } from '../pocitadlo/poc.module';


@NgModule({
  declarations: [LazyModuleComponent],
  imports: [
    CommonModule,
    LazyModuleRoutingModule,
    PocModule,
  ]
})
export class LazyModuleModule { }
