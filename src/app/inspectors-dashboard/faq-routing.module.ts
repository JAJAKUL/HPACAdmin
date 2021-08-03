import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InspectorsDashboardComponent } from './inspectors-dashboard.component';
const routes: Routes = [{
  path: '',
  component: InspectorsDashboardComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InspectorsDashboardRoutingModule { }

