import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthUserGuard implements CanActivate{

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        console.log(`AuthUserGuard :: Next:: ${JSON.stringify(next.queryParams)}`);
        console.log(`AuthUserGuard :: State:: ${state.toString}`);
        return of(true);
    }

}