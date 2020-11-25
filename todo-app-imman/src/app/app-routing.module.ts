import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChildComponentComponent} from './child-component/child-component.component';
const routes: Routes = [
  {path:'child',component:ChildComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
