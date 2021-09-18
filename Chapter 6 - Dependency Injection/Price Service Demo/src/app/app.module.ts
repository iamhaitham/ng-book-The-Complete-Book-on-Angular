import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WithoutDependencyInjectionComponent } from './without-dependency-injection/without-dependency-injection.component';
import { WithDependencyInjectionComponent } from './with-dependency-injection/with-dependency-injection.component';

@NgModule({
  declarations: [
    AppComponent,
    WithoutDependencyInjectionComponent,
    WithDependencyInjectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
