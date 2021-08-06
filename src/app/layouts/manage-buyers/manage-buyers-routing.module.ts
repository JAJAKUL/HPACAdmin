import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageBuyersComponent } from './manage-buyers.component';

const routes: Routes = [{
  path: '',
  component: ManageBuyersComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageBuyersRoutingModule { }
