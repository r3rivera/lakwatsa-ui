import { Component } from "@angular/core";
import { AuthService } from "./../../../commons/services/auth.service";

@Component({
    selector: 'r2r-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.scss']
  })
export class LoginComponent{

    constructor(private _authUser:AuthService){}

    signInMsg:string = "Sign in"
    forgotPasswordMsg:string = "Forgot your password?";


    onSignIn(){
      let user = {
        username:"test000",
        password:"test123",
        email:"test@test.com"
      }
      this._authUser.authenticateUser(user).subscribe(resp => {
        console.log("Handling Response...");
        console.log(JSON.stringify(resp));

      });
    }

}