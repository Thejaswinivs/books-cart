import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { BooksCartRoutingModule } from './books-cart-routing.module';

import { RemotecallService } from './DAL/remotecall.service';
import { CommonService } from './DAL/common.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { ViewcartComponent } from './components/viewcart/viewcart.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    ViewcartComponent,
    ProfileComponent,
    LoginComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    HttpModule,
    BooksCartRoutingModule
  ],
  entryComponents: [],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [RemotecallService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
