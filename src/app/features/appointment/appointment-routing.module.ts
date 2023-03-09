import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './create-appt/appointment.component';


const apptRoutes: Routes = [
    { path: '', component: AppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(apptRoutes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }