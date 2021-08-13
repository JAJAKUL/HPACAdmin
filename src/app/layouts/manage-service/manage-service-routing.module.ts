import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageServiceComponent } from './manage-service.component';

const routes: Routes = [{
  path:'',
  component: ManageServiceComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageServiceRoutingModule { }
