import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
  path:'', component:RegisterComponent, pathMatch:'full'
},
  {
  path:'login', component:LoginComponent,
  },{
    path:'signup', component:RegisterComponent
  },{
    path:'home', component:HomeComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
