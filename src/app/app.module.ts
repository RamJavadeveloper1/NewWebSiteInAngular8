import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './myapp/topheading/topheading.component';
import { HttpClientModule  } from "@angular/common/http";
import { NewapiservicesService } from "./sevice/newapiservices.service";
import { TechnewsComponent } from './myapp/technews/technews.component';
import { BusinessnewsComponent } from './myapp/businessnews/businessnews.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { BycategoryComponent } from './myapp/bycategory/bycategory.component';
import { SciencenewsComponent } from './myapp/sciencenews/sciencenews.component';
import { SportnewsComponent } from './myapp/sportnews/sportnews.component';
import { EntertainmentnewsComponent } from './myapp/entertainmentnews/entertainmentnews.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    BusinessnewsComponent,
    BycategoryComponent,
    SciencenewsComponent,
    SportnewsComponent,
    EntertainmentnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [NewapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
