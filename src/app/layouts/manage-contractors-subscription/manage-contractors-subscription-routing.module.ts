import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageContractorsSubscriptionComponent } from './manage-contractors-subscription.component';

const routes: Routes = [{
  path: '',
  component: ManageContractorsSubscriptionComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageContractorsSubscriptionRoutingModule { }
