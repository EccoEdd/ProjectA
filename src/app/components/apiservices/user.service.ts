import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  logIn(data: any): Observable<any>{
    return this.http.post<any>(`${environment.url}users/log-in`, data)
  }

  logOut(): Observable<any>{
    return this.http.delete<any>(`${environment.url}users/log-out`)
  }

  getMyself(): Observable<any>{
    return this.http.get<any>(`${environment.url}users/get-Myself`)
  }

  register(data: any): Observable<any>{
    return this.http.post<any>(`${environment.url}users/register`, data)
  }
}
