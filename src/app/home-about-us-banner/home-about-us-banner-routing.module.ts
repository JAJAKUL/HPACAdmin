import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAboutUsBannerComponent } from './home-about-us-banner.component';

const routes: Routes = [{
  path:'',
  component: HomeAboutUsBannerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeAboutUsBannerRoutingModule { }
