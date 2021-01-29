import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resetpasswordpublic',
  templateUrl: './resetpasswordpublic.component.html',
  styleUrls: ['./resetpasswordpublic.component.css']
})
export class ResetpasswordpublicComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate([this.router.url]);
  }

}
