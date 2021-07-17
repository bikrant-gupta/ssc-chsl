import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExamPageComponent } from './components/exam-page/exam-page.component';
import { InfoPageComponent } from './components/info-page/info-page.component';


import { FlexLayoutModule } from '@angular/flex-layout'

import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { HeaderComponent } from './components/header/header.component';
import { AnalysisComponent } from './components/analysis/analysis.component';



@NgModule({
  declarations: [
    AppComponent,
    ExamPageComponent,
    InfoPageComponent,
    HeaderComponent,
    AnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    MatGridListModule,
    MatButtonModule,
    MatDialogModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
