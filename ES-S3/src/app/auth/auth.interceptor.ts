import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private logSvc:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const accessData = this.logSvc.getAccessData()
    if(!accessData) return next.handle(request);


    const newReq = request.clone({
      headers: request.headers.append('Authorization', `Bearer ${accessData.accessToken}`)
    })

    return next.handle(newReq);

  }
}
