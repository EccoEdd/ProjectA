import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule, DatePipe } from "@angular/common";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { ProfileComponent } from "./views/profile/profile.component";

// extras
import { MatDialogModule } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";
import { MatMenuModule } from "@angular/material/menu";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { DataManager, NameTableService } from "./services/nameTable.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { AuthService } from "./core/auth.service";
import { PluckPipe } from "./core/pipes/map.pipe";

import { NotificationsComponent } from "./components/notifications/notifications.component";
import { MoreComponent } from "./components/more/more.component";

// components for views and layouts
import { AdminNavbarComponent } from "./components/navbars/admin-navbar/admin-navbar.component";
import { AuthNavbarComponent } from "./components/navbars/auth-navbar/auth-navbar.component";
import { FooterComponent } from "./components/footers/footer/footer.component";
import { FooterSmallComponent } from "./components/footers/footer-small/footer-small.component";
import { HeaderStatsComponent } from "./components/headers/header-stats/header-stats.component";
import { IndexNavbarComponent } from "./components/navbars/index-navbar/index-navbar.component";
import { IndexDropdownComponent } from "./components/dropdowns/index-dropdown/index-dropdown.component";
import { TableDropdownComponent } from "./components/dropdowns/table-dropdown/table-dropdown.component";
import { PagesDropdownComponent } from "./components/dropdowns/pages-dropdown/pages-dropdown.component";
import { MapExampleComponent } from "./components/maps/map-example/map-example.component";
import { NotificationDropdownComponent } from "./components/dropdowns/notification-dropdown/notification-dropdown.component";
import { UserDropdownComponent } from "./components/dropdowns/user-dropdown/user-dropdown.component";
import { UserComponent } from "./components/user/user.component";

import { ModalConfirmationComponent } from "./components/modals/modal-confirmation/modal-confirmation.component";
import { DatetimeComponent } from "./components/inputs/datetime/datetime.component";
import { DateComponent } from "./components/inputs/date/date.component";
import { TimeComponent } from "./components/inputs/time/time.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { JwtInterceptor } from "./interceptors/jwt.interceptor";
import { CookieService } from "ngx-cookie-service";
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from "ngx-mask";
import { GoogleMapsModule } from "@angular/google-maps";
import { LoaderComponent } from './components/loader/loader.component';
import { BodyComponent } from "./components/body/body.component";
import { HelloComponent } from './components/hello/hello.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';

import { ReCaptchaV3Service } from "ngx-captcha";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IndexDropdownComponent,
    PagesDropdownComponent,
    TableDropdownComponent,
    NotificationDropdownComponent,
    UserDropdownComponent,
    FooterComponent,
    FooterSmallComponent,
    MapExampleComponent,
    HeaderStatsComponent,
    AuthNavbarComponent,
    AdminNavbarComponent,
    IndexNavbarComponent,
    AdminComponent,
    AuthComponent,
    MapsComponent,
    SettingsComponent,
    TablesComponent,
    IndexComponent,
    ProfileComponent,
    UserComponent,
    ModalConfirmationComponent,
    DatetimeComponent,
    DateComponent,
    TimeComponent,
    PluckPipe,
    LoginComponent,
    LoaderComponent,
    NotificationsComponent,
    BodyComponent,
    MoreComponent,
    HelloComponent,
    RegisterComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTableModule,
    MatSnackBarModule,
    MatMenuModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgxDatatableModule.forRoot({
      messages: {
        emptyMessage: "No hay datos.", // Message to show when array is presented, but contains no values
        totalMessage: "total", // Footer total message
        selectedMessage: "seleccionado", // Footer selected message
      },
    }),
    NgxMaskDirective,
    NgxMaskPipe,
    GoogleMapsModule,
    DragDropModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [
    NameTableService,
    PluckPipe,
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    DataManager,
    provideNgxMask(),
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
