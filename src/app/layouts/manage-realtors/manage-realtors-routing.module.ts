import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageRealtorsComponent } from './manage-realtors.component';

const routes: Routes = [{
  path:'',
  component: ManageRealtorsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRealtorsRoutingModule { }
