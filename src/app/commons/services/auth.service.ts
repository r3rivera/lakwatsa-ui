import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthClientUser } from "../models/authclient-user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService{

    constructor(private _httpClient: HttpClient){}

    authenticateUser(user: AuthClientUser):Observable<any>{
        console.log("AuthService Angular....");
        return this._httpClient.post("auth",{...user});

    }
}