import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpHandler,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';
@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let httpHeaders = new HttpHeaders();
   

    let authorization = sessionStorage.getItem('Authorization');
    if(authorization){
      httpHeaders = httpHeaders.append('Authorization', authorization); 
    }

    // let xsrf = sessionStorage.getItem('XSRF-TOKEN');
    // if(xsrf){
    //   httpHeaders = httpHeaders.append('X-XSRF-TOKEN', "7fe594dc-c6a6-40ae-94d4-f1a088711b66");
    // }

    if (req.url.includes('whatsapp-number-validator3.p.rapidapi.com')) {
      httpHeaders = httpHeaders.append('Content-Type', 'application/json');
      httpHeaders = httpHeaders.append('X-RapidAPI-Host', 'whatsapp-number-validator3.p.rapidapi.com');
      httpHeaders = httpHeaders.append('X-RapidAPI-Key', 'b67ea09343mshc9347fced5fafd1p170d30jsn87a8ba147287');
    }

   // httpHeaders = httpHeaders.append('X-Requested-With', 'XMLHttpRequest');
    const xhr = req.clone({
      headers: httpHeaders
    });
  return next.handle(xhr).pipe(tap(
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 401) {
            return;
          }
          this.router.navigate(['dashboard']);
        }
      }));
  }
}