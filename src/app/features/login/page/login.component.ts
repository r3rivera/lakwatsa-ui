import { Component } from "@angular/core";

@Component({
    selector: 'r2r-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.scss']
  })
export class LoginComponent{

    signInMsg:string = "Sign in"
    forgotPasswordMsg:string = "Forgot your password?";


    onSignIn(){
      console.log("Signing in!");
    }

}