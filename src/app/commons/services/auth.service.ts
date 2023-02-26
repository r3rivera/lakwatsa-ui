import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthClientUser } from "./../../../shared/models/authclient-user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService{

    constructor(private _httpClient: HttpClient){}

    authenticateUser(user: AuthClientUser){
        console.log("AuthService Angular....");
        console.log(user);
    }
}