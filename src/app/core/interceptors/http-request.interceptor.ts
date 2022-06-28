import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
// import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(
    // private _toastr: ToastrService
    ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
        if (error.status == 401) {
          window.location.href = environment.dashboard_v1 + 'logout';
          return EMPTY;
        } else if(error.status == 403 || error.status == 500) {
          // this._toastr.error(error.statusText);
          console.log(error.statusText);

          return EMPTY;
        } else {
          if(error.error){
            return throwError(error.error);
          } else {
            return throwError(error);
          }
        }
      })
    );
  }
}
