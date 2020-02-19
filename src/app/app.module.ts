import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ROUTES
import { APP_ROUTING } from './app.routes';

// MODULES
import { PagesModule } from './pages/pages.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
