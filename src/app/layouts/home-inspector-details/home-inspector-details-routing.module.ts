import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeInspectorDetailsComponent } from './home-inspector-details.component';
const routes: Routes = [{
  path: '',
  component: HomeInspectorDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeInspectorDetailsRoutingModule { }
