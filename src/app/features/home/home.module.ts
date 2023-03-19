import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./page/home.component";

@NgModule({
    declarations: [
      HomeComponent
    ],
    imports: [
      BrowserModule,
      HttpClientModule,
      
      HomeRoutingModule
    ],
    providers: [],
    bootstrap: [HomeComponent]
  })
export class HomeModule{}