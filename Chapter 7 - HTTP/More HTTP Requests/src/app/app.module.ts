import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MoreHttpRequestsComponent } from './more-http-requests/more-http-requests.component';

@NgModule({
  declarations: [
    AppComponent,
    MoreHttpRequestsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
