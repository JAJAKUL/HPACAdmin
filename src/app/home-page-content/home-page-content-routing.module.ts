import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageContentComponent } from './home-page-content.component';

const routes: Routes = [{
  path:'',
  component : HomePageContentComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageContentRoutingModule { }
