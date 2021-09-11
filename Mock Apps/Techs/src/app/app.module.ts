import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TechDetailsComponent } from './tech-details/tech-details.component';
import { TechVotesComponent } from './tech-votes/tech-votes.component';
import { TechListComponent } from './tech-list/tech-list.component';
import { TechRowComponent } from './tech-row/tech-row.component';
import { TechButtonupComponent } from './tech-buttonup/tech-buttonup.component';
import { TechButtondownComponent } from './tech-buttondown/tech-buttondown.component';

@NgModule({
  declarations: [
    AppComponent,
    TechDetailsComponent,
    TechVotesComponent,
    TechListComponent,
    TechRowComponent,
    TechButtonupComponent,
    TechButtondownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
