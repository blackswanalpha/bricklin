import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { QRCodeModule } from 'angularx-qrcode';
// import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
// import { QRCodeModule } from 'angular2-qrcode';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatStepperModule} from '@angular/material/stepper';
import {  MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatMenuModule} from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode' ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { RetailComponent } from './retail/retail.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { InterceptorService } from './loader/interceptor.service';
import { GeneratorComponent } from './generator/generator.component';
import { SplashComponent } from './splash/splash.component';
import { LogoutComponent } from './logout/logout.component';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';
import { DetectComponent } from './detect/detect.component';
import { ErrorComponent } from './error/error.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    RetailComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    ManufacturerComponent,
    GeneratorComponent,
    SplashComponent,
    LogoutComponent,
    NavComponent,
    ProductComponent,
    DetectComponent,
    ErrorComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
MatMenuModule,
     MatInputModule,
     MatStepperModule,
      SimpleNotificationsModule.forRoot(),
    MatIconModule,
    MatCardModule,
    MatDividerModule,
NgxQRCodeModule,
    MatFormFieldModule,
    MatSnackBarModule,  
   ReactiveFormsModule,
      MatProgressBarModule,
    MatProgressSpinnerModule,
        QRCodeModule,
        NgbModule
          
        
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
