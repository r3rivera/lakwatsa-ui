import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppointmentRoutingModule } from "./appointment-routing.module";
import { AppointmentComponent } from "./create-appt/appointment.component";

@NgModule({
    declarations: [
        AppointmentComponent
    ],
    imports: [
      AppointmentRoutingModule,
      BrowserModule,
      HttpClientModule
    ],
    exports:[
        AppointmentComponent
    ],
    providers: [],
    bootstrap: [AppointmentComponent]
  })
export class AppointmentModule{

}