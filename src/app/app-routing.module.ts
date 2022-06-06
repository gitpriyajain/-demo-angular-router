import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  {path:'help',component:HelpComponent},
  {path:'home',component:HomeComponent}, 
  {path:'terms',component:HelpComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
