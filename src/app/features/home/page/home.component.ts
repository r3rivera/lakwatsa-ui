import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Compare } from "./../../../../app/commons/util/compare.uti";

@Component({
    selector: 'r2r-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
  })
export class HomeComponent{

    pageTitle:string = "Welcome to home component page";


    constructor(private readonly _router:Router, private readonly _route:ActivatedRoute){}

    private oldJson = {
                preferences : ['ALERT','BANK','BUY','SELL']};
    private updJson = {preferences : ['BANK','ALERT','EXCHANGE','BUY']};

    public onGetStarted():void{
      console.log(Compare.isEqual(this.oldJson, this.updJson));
      this._router.navigate(['/login']);
    }
}