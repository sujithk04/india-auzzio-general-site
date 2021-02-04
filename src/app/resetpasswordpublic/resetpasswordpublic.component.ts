import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HelperServicesService} from '../services/helper-services.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-resetpasswordpublic',
  templateUrl: './resetpasswordpublic.component.html',
  styleUrls: ['./resetpasswordpublic.component.css']
})
export class ResetpasswordpublicComponent implements OnInit {
  public isMobilevar: boolean;
  public resetPassWordFG: FormGroup;
  constructor(private router: Router, private utilityService: HelperServicesService, private resetPasswordFB: FormBuilder) {
    this.isMobilevar =  this.utilityService.isMobile();
  }

  ngOnInit(): void {
    // go to same page on reload
    this.router.navigate([this.router.url]);

    // build the form

    this.resetPassWordFG = this.resetPasswordFB.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPasword: ['',Validators.required]
    });
  }


  
  

}
