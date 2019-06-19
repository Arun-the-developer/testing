import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BusinessComponent } from './business/business.component';
import { SportsComponent } from './sports/sports.component';
import { TechComponent } from './tech/tech.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { EducationComponent } from './education/education.component';
import  {HttpClientModule}  from '@angular/common/http';
import { NewsComponent } from './news/news.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BusinessComponent,
    SportsComponent,
    TechComponent,
    EntertainmentComponent,
    EducationComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
