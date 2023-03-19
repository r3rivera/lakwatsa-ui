import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./page/home.component";

@NgModule({
    declarations: [
      HomeComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      HomeRoutingModule
    ],
    providers: [],
    bootstrap: [HomeComponent]
  })
export class HomeModule{}