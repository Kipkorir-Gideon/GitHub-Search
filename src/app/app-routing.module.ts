import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserReposComponent } from './components/user-repos/user-repos.component';
import { ReposComponent } from './components/repos/repos.component';

const routes: Routes = [
  {path: 'profile', component: UserReposComponent},
  {path: 'repos', component: ReposComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
