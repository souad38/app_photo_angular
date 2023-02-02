import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcheterComponent } from './components/acheter/acheter.component';
import { HomeComponent } from './components/home/home.component';
import { MyproductComponent } from './components/myproduct/myproduct.component';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './contact/login/login.component';
import { RegisterComponent } from './contact/register/register.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"acheter",component:AcheterComponent},
  {path:"login",component:LoginComponent },
  {path:"register",component:RegisterComponent},
  {path:"product",component:ProductComponent},
  {path:"myproduct",component:MyproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
