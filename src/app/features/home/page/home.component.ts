import { Component } from "@angular/core";

@Component({
    selector: 'r2r-home',
    template: `<h1>Home Component</h1>
               <div>{{pageTitle}}</div>`,
    styleUrls: ['./home.component.scss']
  })
export class HomeComponent{

    pageTitle:string = "Welcome to home page";

}