import { Component,OnInit } from '@angular/core';
import {RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'auzzio-password-reset';
  constructor(private router: Router) {
  }
  ngOnInit(){
    this.router.navigateByUrl('/password')
  }

}
