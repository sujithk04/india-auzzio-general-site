import {HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import { environment } from '../../environments/environment.prod';
import {catchError, concatMap, tap} from "rxjs/operators";
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable()

export class HttpRequestInterceptor implements HttpInterceptor {
  key1: string;
  value1: string;
  xapikey: string;
  constructor(private errorSnackBar: MatSnackBar) {
  }
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.key1 = environment.key1;
    this.value1 = environment.value1;
    this.xapikey = environment.xapikey;
    const authheader = 'Basic ' + btoa(this.key1 + ':' + this.value1);
    let headerObj = {
      "x-api-key": this.xapikey,
      Authorization: authheader
    };
    return next.handle(httpRequest.clone({setHeaders: headerObj})).pipe(catchError(
      // tslint:disable-next-line:no-shadowed-variable
      (errResponse: HttpErrorResponse,  caught: Observable<any>) => {
        let errorMessage: string;
        if (errResponse.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${errResponse.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          switch (errResponse.status) {
            case 400:
              errorMessage = "Bad Request.";
              break;
            case 401:
              errorMessage = "You need to log in to do this action.";
              break;
            case 403:
              errorMessage = "You don't have permission to access the requested resource.";
              break;
            case 404:
              errorMessage = "The requested resource does not exist.";
              break;
            case 412:
              errorMessage = "Precondition Failed.";
              break;
            case 500:
              errorMessage = "Internal Server Error.";
              break;
            case 502:
              errorMessage = "Internal Server Error.";
              break;
            case 503:
              errorMessage = "The requested service is not available.";
              break;
            case 422:
              errorMessage = "Validation Error!";
              break;
            default:
              errorMessage = "Something went wrong!";
          }
        }

        const snackBarRef = this.errorSnackBar.open(errorMessage + ' ' + errResponse.error.status_text, "Dismiss", {
          duration: 5000,
          panelClass: ['errorSnack'],
        });
        return snackBarRef.onAction().pipe(concatMap(() => caught));

        return throwError(errResponse);
      }
    ));
  }
}