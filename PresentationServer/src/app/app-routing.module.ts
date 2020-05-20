import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { V1DashbordComponent } from './Panels/Users/Components/Dashbord/v1-dashbord/v1-dashbord.component';
import { V1LoginComponent } from './Panels/Users/Components/Login/v1-login/v1-login.component';
import { V1FilterSearchComponent } from './Panels/Comman/Components/Main/Header/v1-filter-search/v1-filter-search.component';
import { V1RoughComponent } from './Panels/Users/Components/v1-rough/v1-rough.component';


const routes: Routes = [
  {
    path: "", redirectTo: "dashbordv1", pathMatch: "full" 
  },
  {
    path: "dashbord", 
    component: V1DashbordComponent  
  },
  {
    path: "login", 
    component: V1LoginComponent  
  },
  {
    path: "dashbordv1", 
    component: V1FilterSearchComponent  
  },
  {
    path: "rough", 
    component: V1RoughComponent  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
