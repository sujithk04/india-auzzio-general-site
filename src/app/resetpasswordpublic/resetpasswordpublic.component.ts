import { Ipassreset } from './../model/passwordreset';
import { PasswordresetService } from './../services/passwordreset.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HelperServicesService} from '../services/helper-services.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-resetpasswordpublic',
  templateUrl: './resetpasswordpublic.component.html',
  styleUrls: ['./resetpasswordpublic.component.css']
})
export class ResetpasswordpublicComponent implements OnInit {
  public isMobilevar: boolean;
  public resetPassWordFG: FormGroup;
  resetSubscription: Subscription;
  resetObject: Ipassreset = {
    new_password: '',
    email_uuid: '',
    email_expiry: 0
  }
  constructor(private router: Router,
              private utilityService: HelperServicesService,
              private actRoute: ActivatedRoute,
              private resetService:  PasswordresetService,
              private resetPasswordFB: FormBuilder) {
    this.isMobilevar =  this.utilityService.isMobile();
  }

  ngOnInit(): void {
    // go to same page on reload
    this.router.navigate([this.router.url]);

    // build the form

    this.resetPassWordFG = this.resetPasswordFB.group({
      newPassword: ['', Validators.required],
      confirmPasword: ['',Validators.required]
    });

    const id = this.actRoute.snapshot.params.resetkey;
    console.log(id);
  }

  // method to invoke the reset password
  public invokeResetPasswordEmail() {
    this.resetObject.email_uuid = "";
    this.resetObject.new_password = "";
    this.resetObject.email_expiry = 12;

    this.resetSubscription = this.resetService.resetPasswordEmail(this.resetObject).subscribe(
      (response) => {
        console.log(response);
      },
      (err) => {
        console.log(err)
      }
    )
  }

}
