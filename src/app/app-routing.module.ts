import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreatemovieComponent} from "./createmovie/createmovie.component";

const routes: Routes = [
  {
    path:'',
    component: CreatemovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
