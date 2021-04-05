import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResetpasswordpublicComponent } from './resetpasswordpublic/resetpasswordpublic.component';
import { AppComponent } from './app.component';


const routes: Routes = [{
  path: 'password/:resetkey/:linkExpiry',
  component: ResetpasswordpublicComponent,
},
{ path: '', redirectTo: '/password/:resetkey/:linkExpiry', pathMatch: 'full' },
{ path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
