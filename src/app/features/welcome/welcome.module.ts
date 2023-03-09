import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { WelcomeRoutingModule } from "./welcome-routing.module";
import { WelcomeComponent } from "./page/welcome.component";

@NgModule({
    declarations: [
      WelcomeComponent,
    ],
    imports: [
      BrowserModule,
      HttpClientModule,
      WelcomeRoutingModule,
    ],
    providers: [],
    bootstrap: [WelcomeComponent]
  })
export class WelcomeModule{}