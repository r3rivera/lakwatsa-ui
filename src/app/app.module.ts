import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './features/login/login.module';
import { AppointmentRoutingModule } from './features/appointment/appointment-routing.module';
import { SharedModule } from './features/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    LoginModule,
    AppointmentRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: Window, useValue: window
    }
  ],
})
export class AppModule { }
