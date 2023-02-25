import { Component } from "@angular/core";

@Component({
    selector: 'r2r-login',
    template: `<h1>Login Component</h1>
               <div>{{pageTitle}}</div>`,
    styleUrls: ['./login.component.scss']
  })
export class LoginComponent{

    pageTitle:string = "Welcome to login page";

}