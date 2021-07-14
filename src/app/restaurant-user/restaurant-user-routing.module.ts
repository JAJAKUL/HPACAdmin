import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantUserComponent } from './restaurant-user.component';
const routes: Routes = [
  {
    path:'',
    component: RestaurantUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantUserRoutingModule { }
