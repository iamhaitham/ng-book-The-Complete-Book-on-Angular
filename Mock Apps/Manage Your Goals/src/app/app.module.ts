import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { GoalService } from './services/goal.service';
import { ToDoComponent } from './to-do/to-do.component';
import { DoingComponent } from './doing/doing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    DoingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule

  ],
  providers: [GoalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
