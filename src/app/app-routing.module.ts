import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";

import { authGuard } from "./guards/auth.guard";
import { HelloComponent } from "./components/hello/hello.component";

const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {path: 'hello', component: HelloComponent}
    ],
    canActivate: [authGuard],
  },

  // no layout views
  {
    path: "",
    component: IndexComponent,
    pathMatch: "full",
    canActivate: [authGuard],
  },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
