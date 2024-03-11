import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  // User Data
  private userSubject: BehaviorSubject<any>;
  public user: Observable<any>;
  private loggedSubject: BehaviorSubject<boolean>;
  public logged: Observable<boolean>;

  // Role categories
  private categoriesSubject: BehaviorSubject<any[]>;
  public categories: Observable<any[]>;

  private viewSubject: BehaviorSubject<string>;
  public view: Observable<string>;

  constructor(private cookieService: CookieService) {
    this.setData();
  }

  private setData(): void {
    this.userSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem("user"))
    );
    this.user = this.userSubject.asObservable();
    this.loggedSubject = new BehaviorSubject<boolean>(
      this.cookieService.check("token")
    );
    this.logged = this.loggedSubject.asObservable();

    this.categoriesSubject = new BehaviorSubject<any[]>(
      JSON.parse(sessionStorage.getItem("categories"))
    );
    this.categories = this.categoriesSubject.asObservable();

    this.viewSubject = new BehaviorSubject<string>(
      sessionStorage.getItem("table")
    );
    this.view = this.viewSubject.asObservable();
  }

  public get userValue(): any {
    return this.userSubject.value;
  }

  public setUserValue(user: any): void {
    sessionStorage.setItem("user", JSON.stringify(user));
    this.userSubject.next(user);
  }

  public get categoriesValue(): any[] {
    return this.categoriesSubject.value;
  }

  public setCategoriesValue(categories: any[]): void {
    sessionStorage.setItem("categories", JSON.stringify(categories));
    this.categoriesSubject.next(categories);
  }

  public get viewValue(): string {
    return this.viewSubject.value;
  }

  public setViewValue(view: string): void {
    sessionStorage.setItem("table", view);
    this.viewSubject.next(view);
  }

  public get loggedValue(): boolean {
    return this.loggedSubject.value;
  }

  public setLoggedValue(logged: boolean): void {
    this.loggedSubject.next(logged);
  }

  public clear(): void {
    this.setLoggedValue(false);
    localStorage.clear();
    sessionStorage.clear();
  }
}
