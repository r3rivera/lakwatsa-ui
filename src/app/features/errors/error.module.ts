import { NgModule } from "@angular/core";
import { ErrorRoutingModule } from "./error-routing.module";
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
    declarations: [
        NotFoundComponent
    ],
    imports: [ErrorRoutingModule],
    providers: [],
    bootstrap: [NotFoundComponent]
  })
export class ErrorModule{}