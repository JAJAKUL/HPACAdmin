import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratorsDetailsComponent } from './contrators-details.component';

import { ContratorsDetailsRoutingModule } from './contrators-details-routing.module';


@NgModule({
  declarations: [ContratorsDetailsComponent],
  imports: [
    CommonModule,
    ContratorsDetailsRoutingModule
  ]
})
export class ContratorsDetailsModule { }
