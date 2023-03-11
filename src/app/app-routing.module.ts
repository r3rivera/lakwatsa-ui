import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthUserGuard } from './commons/guards/auth-user.gurard';


const routes: Routes = [
  { path: 'appointment', 
    canActivateChild: [AuthUserGuard],
    loadChildren: () => import('./features/appointment/appointment.module').then(m => m.AppointmentModule)},
  { path: 'login', 
    loadChildren: () => import('./features/login/login.module').then( m => m.LoginModule)},
  { path: '', 
    loadChildren: () => import('./features/welcome/welcome.module').then( m => m.WelcomeModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
