import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './login/login.component';
import { NewcompComponent } from './newcomp/newcomp.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'forms',component:FormsComponent},
  {path:'newcomp',component:NewcompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
