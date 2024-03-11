import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContextToken,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";
import { DataService } from "app/services/data.service";
import { catchError, tap } from "rxjs/operators";

export const BYPASS_JW_TOKEN = new HttpContextToken(() => false);

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    public cookieService: CookieService,
    private router: Router,
    private dataService: DataService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Aquí evaluamos el contexto y omitimos el interceptor.
    if (req.context.get(BYPASS_JW_TOKEN) === true) {
      return next.handle(req);
    }
    if (this.cookieService.check("token")) {
      let token = this.cookieService.get("token");
      const reqClone = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
      return next.handle(reqClone).pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
          }
        }),
        catchError((err: any) => {
          //console.log({err});
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.dataService.clear();
              this.router.navigate(["/"]);
            }
          }
          throw err;
        })
      );
    } else {
      const reqClone = req.clone({
        setHeaders: {
          Accept: "application/json",
        },
      });
      return next.handle(reqClone);
    }
  }
}
