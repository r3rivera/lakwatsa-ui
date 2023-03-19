import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'login', loadChildren: () => import('./features/login/login.module').then( m => m.LoginModule)},
  { path: '', loadChildren: () => import('./features/home/home.module').then( m => m.HomeModule)},
  { path: '**', loadChildren: () => import('./features/errors/error.module').then( m => m.ErrorModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
