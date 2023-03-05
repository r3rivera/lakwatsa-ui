import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { WelcomeRoutingModule } from "./welcome-routing.module";
import { WelcomeComponent } from "./page/welcome.component";
import { SharedModule } from "../shared/shared.module";
import { FooterComponent } from "../shared/footer/footer.component";

@NgModule({
    declarations: [
      WelcomeComponent,
    ],
    imports: [
      BrowserModule,
      HttpClientModule,
      SharedModule,
      WelcomeRoutingModule,
    ],
    providers: [],
    bootstrap: [WelcomeComponent]
  })
export class WelcomeModule{}