import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login.component';

const loginRoutes: Routes = [
    { path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(loginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }