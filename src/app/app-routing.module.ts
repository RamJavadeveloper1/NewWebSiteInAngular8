import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnewsComponent } from './myapp/technews/technews.component';
import { TopheadingComponent } from './myapp/topheading/topheading.component';
import { BusinessnewsComponent } from './myapp/businessnews/businessnews.component';
import { BycategoryComponent } from './myapp/bycategory/bycategory.component';
import { EntertainmentnewsComponent } from './myapp/entertainmentnews/entertainmentnews.component';
import { SciencenewsComponent } from './myapp/sciencenews/sciencenews.component';
import { SportnewsComponent } from './myapp/sportnews/sportnews.component';

const routes: Routes = [
  {path:'',component:TopheadingComponent}, //home
  {path:'tech', component: TechnewsComponent},// /tech
  {path:'business', component: BusinessnewsComponent},
  {path : 'bycategory', component: BycategoryComponent},
  {path: 'entertainment' , component: EntertainmentnewsComponent},
  {path: 'science' , component: SciencenewsComponent},
  {path: 'sport' , component: SportnewsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
