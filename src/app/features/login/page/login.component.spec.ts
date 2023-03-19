import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { LoginComponent } from "./login.component";


describe('AppComponent', () => {

    let loginComponent:LoginComponent;
    let fixture: ComponentFixture<LoginComponent>

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
          RouterTestingModule
        ],
        declarations: [
          LoginComponent
        ],
      }).compileComponents();

      fixture = await TestBed.createComponent(LoginComponent);
      loginComponent = fixture.componentInstance;
      fixture.detectChanges();

    });
  
    test('Test the page title', () => {
      expect(loginComponent.pageTitle).toBe('Welcome to login page');
    })
  });