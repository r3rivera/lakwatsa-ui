import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./page/login.component";

@NgModule({
    declarations: [
      LoginComponent
    ],
    imports: [
      LoginRoutingModule,
      BrowserModule,
      HttpClientModule
    ],
    providers: [],
    bootstrap: [LoginComponent]
  })
export class LoginModule{}