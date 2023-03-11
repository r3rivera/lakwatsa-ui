import { Inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class RedirectionService{

    constructor(@Inject(Window) protected window:Window){}


}