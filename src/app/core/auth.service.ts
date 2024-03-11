import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  status: boolean = false
  constructor(
    public cookieService: CookieService
  ) { }

  getAuthToken(): Observable<boolean> {
    this.status = this.cookieService.check('token')
    if(this.cookieService.check('token') == true)
      return of(true)
    return of(false)
  }
}
