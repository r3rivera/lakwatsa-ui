import { NgModule } from "@angular/core";
import { NonSecuredHeaderComponent } from "./non-secured/non-secured-header.component";
import { SecuredHeaderComponent } from "./secured/secured-header.component";

@NgModule({
    imports: [],
    providers: [],
    bootstrap: [
        NonSecuredHeaderComponent,
        SecuredHeaderComponent]
  })
  export class HeaderModule { }