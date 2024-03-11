import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { DataService } from "app/services/data.service";
import { CookieService } from "ngx-cookie-service";

export const authGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  const dataService = inject(DataService);
  const router: Router = inject(Router);
  const isAuthToken = cookieService.check("token");
  const currentPath = state.url;
  let firstPath = null;
  let currentView = "-1";

  if (isAuthToken) {
    if (currentPath == "/") {
      if (currentView === "-1") return redirectToDefault(firstPath);
    } else {
      if (currentView === "-1") return redirectToDefault(firstPath);
      else return true;
    }
  } else {
    dataService.clear();
    cookieService.delete("table", "/");

    if (currentPath != "/") {
      router.navigate(["/"]);
      return false;
    } else {
      return true;
    }
  }
};

const redirectToDefault = (firstPath: string): boolean => {
  const router = inject(Router);
  const dataService = inject(DataService);
  const cookieService = inject(CookieService);

  if (firstPath != null) {
    router.navigate([firstPath]);
    return true;
  } else {
    dataService.clear();
    cookieService.delete("token", "/");
    cookieService.delete("table", "/");
  }

  router.navigate(["/"]);
  return false;
};




