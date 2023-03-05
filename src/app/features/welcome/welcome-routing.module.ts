import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './page/welcome.component';

const homeRoutes: Routes = [
    { path: '', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(homeRoutes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }