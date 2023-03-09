import { Component } from '@angular/core';

@Component({
  selector: 'r2r-root',
  template:`
  <header>
    <r2r-header></r2r-header>
  </header>
  <main class="h-screen">
    <router-outlet></router-outlet>
  </main>
    <r2r-footer></r2r-footer>
  `
})
export class AppComponent {}
