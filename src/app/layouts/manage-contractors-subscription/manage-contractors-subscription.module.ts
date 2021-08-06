import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageContractorsSubscriptionComponent } from './manage-contractors-subscription.component';
import { ManageContractorsSubscriptionRoutingModule } from './manage-contractors-subscription-routing.module';


import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSortModule} from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [ManageContractorsSubscriptionComponent],
  imports: [
    CommonModule,
    ManageContractorsSubscriptionRoutingModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSortModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class ManageContractorsSubscriptionModule { }
