import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './features/login/login.module';
import { HeaderModule } from './components/header/header.module';
import { NonSecuredHeaderComponent } from './components/header/non-secured/non-secured-header.component';
import { SecuredHeaderComponent } from './components/header/secured/secured-header.component';

@NgModule({
  declarations: [
    AppComponent,
    SecuredHeaderComponent,
    NonSecuredHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
