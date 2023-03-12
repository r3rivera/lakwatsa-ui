import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { MessageService, RedirectionService, UserSessionService } from "./../services";

@Injectable({
    providedIn: 'root'
})
export class AuthUserGuard implements CanActivateChild{

    constructor(
        private _redirectionService: RedirectionService,
        private _messageService: MessageService,
        private _userSessionService: UserSessionService,
    ){}

    canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

        if(!this._userSessionService.isRequiredRefresh()){
            this._messageService.setLoading(false);
            return of(true);
        }else{


        }

        console.log(`AuthUserGuard :: Next:: ${JSON.stringify(next.queryParams)}`);
        console.log(`AuthUserGuard :: State:: ${state.toString}`);
        return of(true);
    }

}