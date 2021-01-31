import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResetpasswordpublicComponent } from './resetpasswordpublic/resetpasswordpublic.component';
import {HelperServicesService} from './services/helper-services.service';
import {DeviceDetectorService} from 'ngx-device-detector';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { EmailverifylinkComponent } from './emailverifylink/emailverifylink.component';

@NgModule({
  declarations: [
    AppComponent,
    ResetpasswordpublicComponent,
    EmailverifylinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MatToolbarModule,
    BrowserAnimationsModule , MatButtonModule,
    MatFormFieldModule, MatInputModule, MatCardModule,
    ReactiveFormsModule
  ],
  providers: [HelperServicesService, DeviceDetectorService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
