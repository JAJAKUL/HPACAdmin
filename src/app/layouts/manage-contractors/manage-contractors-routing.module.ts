import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageContractorsComponent } from './manage-contractors.component';
const routes: Routes = [{
  path:'',
  component: ManageContractorsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageContractorsRoutingModule { }
