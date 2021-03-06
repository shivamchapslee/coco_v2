import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { V1DashbordComponent } from './Panels/Users/Components/Dashbord/v1-dashbord/v1-dashbord.component';
import { V1LoginComponent } from './Panels/Users/Components/Login/v1-login/v1-login.component';
import { V1MenuBarComponent } from './Panels/Comman/Components/Main/Menu/v1-menu-bar/v1-menu-bar.component';
import { MaterialModule } from './material/material.module';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { V1FilterSearchComponent } from './Panels/Comman/Components/Main/Header/v1-filter-search/v1-filter-search.component';
import { V1FooterComponent } from './Panels/Comman/Components/Main/Footer/v1-footer/v1-footer.component';
import { V1RoughComponent } from './Panels/Users/Components/v1-rough/v1-rough.component';
import { CookieService } from 'ngx-cookie-service';
import { V1ConsumableCardComponent } from './Panels/Users/Components/Cards/Cosumables/v1-consumable-card/v1-consumable-card.component';
import { V1SignUpComponent } from './Panels/Comman/Components/SignUp/v1-sign-up/v1-sign-up.component';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    V1DashbordComponent,
    V1LoginComponent,
    V1MenuBarComponent,
    V1FilterSearchComponent,
    V1FooterComponent,
    V1RoughComponent,
    V1ConsumableCardComponent,
    V1SignUpComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    MaterialModule,
    ReactiveFormsModule
    // MDBBootstrapModule.forRoot() 
  ],
  // schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
