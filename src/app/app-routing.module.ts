import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [

  { path: 'business', 
component:BusinessComponent},
{ path: 'news', 
component:NewsComponent},
{ path: 'sports', 
loadChildren:'./sports/sports.module#SportsModule'
},
{ path: 'lifeStyle', 
loadChildren:'./lifeStyle/lifeStyle.module#LifeStyleModule'
},
{ path: 'tech', 
loadChildren:'./tech/tech.module#TechModule'
},
{ path: 'entertainment', 
loadChildren:'./entertainment/entertainment.module#EntertainmentModule'
},
{ path: 'education', 
loadChildren:'./education/education.module#EducationModule'
},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
