import { Ipassreset1 } from './../model/passwordreset';
import { PasswordresetService } from './../services/passwordreset.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HelperServicesService} from '../services/helper-services.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-resetpasswordpublic',
  templateUrl:'./resetpasswordpublic.component.html',
  styleUrls: ['./resetpasswordpublic.component.css']
})
export class ResetpasswordpublicComponent implements OnInit {
  public isMobilevar: boolean;
 public isDeskTopvar: boolean;
public  isTabletvar: boolean;
  public resetPassWordFG: FormGroup;
  resetSubscription: Subscription;
  resetObject: Ipassreset1 = {
    new_password: '',
    email_uuid: '',
    email_expiry: 0
  }
  
  constructor(private router: Router,
              private utilityService: DeviceDetectorService,
              private actRoute: ActivatedRoute,
              private resetService:  PasswordresetService,
              private resetPasswordFB: FormBuilder,
              private snackBar: MatSnackBar, ) {
    this.isMobilevar =  this.utilityService.isMobile();
    this.isDeskTopvar= this.utilityService.isDesktop();
    this.isTabletvar= this.utilityService.isTablet();
  }

  ngOnInit(): void {
    // go to same page on reload
    this.router.navigate([this.router.url]);
    
    // build the form

    this.resetPassWordFG = this.resetPasswordFB.group({
      newPassword: ['', Validators.required],
      confirmPasword: ['',Validators.required]
    });
    console.log(this.actRoute.snapshot.params);
  }

  // method to invoke the reset password
  public invokeResetPasswordEmail1() {
    const emailUid = this.actRoute.snapshot.params.resetkey;
    const emailExpr = this.actRoute.snapshot.params.linkExpiry;
    const newPassword = this.resetPassWordFG.get('newPassword').value;
    this.resetObject.email_uuid = emailUid;
    this.resetObject.new_password = newPassword;
    this.resetObject.email_expiry = Number(emailExpr);
    
    this.resetSubscription = this.resetService.resetPasswordPemail(this.resetObject).subscribe(
      (response) => {
        console.log(response);
      },
      (err) => {
        console.log(err)
      }
    )
  }

}
