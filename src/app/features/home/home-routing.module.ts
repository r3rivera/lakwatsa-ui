import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home.component';

const homeRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: '**', loadChildren: () => import('./../errors/error.module').then( m => m.ErrorModule)}
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }