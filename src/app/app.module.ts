import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Exercise1Component } from './exercise-1/exercise-1.component';
import { Exercise2Component } from './exercise-2/exercise-2.component';
import { Exercise3Component } from './exercise-3/exercise-3.component';
import { Exercise4Component } from './exercise-4/exercise-4.component';
import { Exercise5Component } from './exercise-5/exercise-5.component';
import { Exercise6Component } from './exercise-6/exercise-6.component';
import { Exercise7Component } from './exercise-7/exercise-7.component';
import { Exercise8Component } from './exercise-8/exercise-8.component';
import { Exercise9Component } from './exercise-9/exercise-9.component';
import { Exercise10Component } from './exercise-10/exercise-10.component';
import { Exercise11Component } from './exercise-11/exercise-11.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercise1Component,
    Exercise2Component,
    Exercise3Component,
    Exercise4Component,
    Exercise5Component,
    Exercise6Component,
    Exercise7Component,
    Exercise8Component,
    Exercise9Component,
    Exercise10Component,
    Exercise11Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
