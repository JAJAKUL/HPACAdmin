import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAboutUsBannerComponent } from './home-about-us-banner.component';
import { HomeAboutUsBannerRoutingModule } from './home-about-us-banner-routing.module';


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
  declarations: [HomeAboutUsBannerComponent],
  imports: [
    CommonModule,
    HomeAboutUsBannerRoutingModule,
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
export class HomeAboutUsBannerModule { }
