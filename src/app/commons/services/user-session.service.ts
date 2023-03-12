import { Injectable } from "@angular/core";
import { AuthClientUser } from "../models/authclient-user.model";

@Injectable({
    providedIn: 'root'
})
export class UserSessionService{


    private requiredRefresh: boolean = true;


    public isRequiredRefresh():boolean{
        return this.requiredRefresh;
    }
    
    public setRequiredRefresh(required:boolean):void{
        this.requiredRefresh = required;
    }


}