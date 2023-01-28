import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnewsComponent } from './myapp/technews/technews.component';
import { TopheadingComponent } from './myapp/topheading/topheading.component';
import { BusinessnewsComponent } from './myapp/businessnews/businessnews.component';

const routes: Routes = [
  {path:'',component:TopheadingComponent}, //home
  {path:'tech', component: TechnewsComponent},// /tech
  {path:'business', component: BusinessnewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
