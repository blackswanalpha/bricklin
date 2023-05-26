import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratorComponent } from './generator/generator.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
   { path: '', component: HomeComponent, },{
    path: 'login',
   component: LoginComponent,
  },
  {
    path: 'signup',
      component: SignupComponent,
  },
    {
    path: 'manufacturer',
      component: ManufacturerComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
      {
    path: 'generator',
      component: GeneratorComponent,
  },
    { path: '**', component: NotfoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
