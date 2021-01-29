import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResetpasswordpublicComponent} from './resetpasswordpublic/resetpasswordpublic.component';


const routes: Routes = [ {
  path: 'password',
  component: ResetpasswordpublicComponent,
},
  { path: '', redirectTo: '/password', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
