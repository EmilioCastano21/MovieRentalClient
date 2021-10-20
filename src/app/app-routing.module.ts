import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateuserComponent } from './createuser/createuser.component';

const routes: Routes = [

  {
    path:'',
    component: CreateuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
