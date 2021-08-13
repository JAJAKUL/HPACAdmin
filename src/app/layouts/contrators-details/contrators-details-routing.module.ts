import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContratorsDetailsComponent } from './contrators-details.component';
const routes: Routes = [{
  path: '',
  component: ContratorsDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratorsDetailsRoutingModule { }
