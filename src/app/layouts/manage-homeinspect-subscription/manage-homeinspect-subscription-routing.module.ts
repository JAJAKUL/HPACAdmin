import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageHomeinspectSubscriptionComponent } from './manage-homeinspect-subscription.component';

const routes: Routes = [{
  path: '',
  component: ManageHomeinspectSubscriptionComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageHomeinspectSubscriptionRoutingModule { }
