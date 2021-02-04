import { Component } from '@angular/core';
import {HelperServicesService} from './services/helper-services.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'auzzio-password-reset';
  public isMobilevar: boolean;
  public isTabletvar: boolean;
  public isDesktopvar: boolean;
  public mobile: boolean = false
  public desk : boolean = true

  constructor(
    private utilityService: HelperServicesService
  ) {
   

  }
   
  
  ngOnInit(): void {
    this.isMobilevar = this.utilityService.isMobile();
    this.isTabletvar = this.utilityService.isTablet();
    this.isDesktopvar = this.utilityService.isDesktop();

   
  }


mob_tool= {
  "mobile-toolbar": true
}
desk_tool={
  "desk-toolbar": true
}



 
}
