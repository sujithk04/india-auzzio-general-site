import { Ipassreset } from './../model/passwordreset';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordresetService {

  constructor(private http: HttpClient) {
  

  }



  public resetPasswordEmail(reset: Ipassreset) {
   // Service method to call a reset password  API
 // Generate a header object
    let headers = new HttpHeaders();
    headers = headers.append("AuthRequired", "no");
     // rest of the headers will be appended globally by http interceptors
     // Define a url for api end point
    const passResetURL = "https://provider.auzzio.com/user/email/forgot/password/reset";
    // return the http request
    return this.http.post(passResetURL, reset, { headers, observe: 'response' });
 }

} 