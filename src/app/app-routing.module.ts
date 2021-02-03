import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResetpasswordpublicComponent } from './resetpasswordpublic/resetpasswordpublic.component';
import { AppComponent } from './app.component';


const routes: Routes = [{
  path: 'reset/password/:resetkey',
  component: ResetpasswordpublicComponent,
},
{ path: '', redirectTo: '/password/:resetkey', pathMatch: 'full' },
{ path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
