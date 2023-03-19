import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";

const errorRoutes: Routes = [
    { path: '', component: NotFoundComponent},
    { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(errorRoutes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule{}