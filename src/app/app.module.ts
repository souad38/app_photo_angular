import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './contact/login/login.component';
import { RegisterComponent } from './contact/register/register.component';
import { AcheterComponent } from './components/acheter/acheter.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { MyproductComponent } from './components/myproduct/myproduct.component';

import { HttpClientModule} from'@angular/common/http';
import { FormsModule} from'@angular/forms';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NavPhotographieComponent } from './components/nav-photographie/nav-photographie.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AcheterComponent,
    FooterComponent,
    ProductComponent,
    MyproductComponent,
    ProductDetailComponent,
    NavPhotographieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
