import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent} from './login/login.component';
import { HttpTestComponent } from './http-test.component';
import {HttpService} from './httptest.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
    HttpTestComponent,

  ],
  imports: [
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
