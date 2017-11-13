import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignInComponentComponent } from './sign-in-component/sign-in-component.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    SignInComponentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
