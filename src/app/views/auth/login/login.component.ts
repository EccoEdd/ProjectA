import { Component, OnInit } from "@angular/core";
import { HAMMER_LOADER } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { AuthService } from "app/core/auth.service";
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormValidatorService } from "app/core/service/form-validator.service";
import { CookieService } from "ngx-cookie-service";
import { DataService } from "app/services/data.service";
import { NotificationsComponent } from "app/components/notifications/notifications.component";
import { UserService } from "app/components/apiservices/user.service";
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { MatDialog } from "@angular/material/dialog";
import { RegisterUserComponent } from "app/components/register-user/register-user.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  admin: boolean = false;

  user: any = {};
  formGroup: FormGroup;
  formCode: FormGroup;

  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "top";

  validationMessages = {
    email: [{ type: "required", message: "Ingrese su correo de Usuario" }],
    password: [{ type: "required", message: "Ingrese su Contraseña" }],
  };

  validationCodeMessage = {
    code: [{type:"required", message: "Ingrese el codigo proporcionado en su correo"}]
  }

  constructor(
    private userService: UserService,
    private router: Router,
    private auth: AuthService,
    private alert: MatSnackBar,
    private fb: FormBuilder,
    public formService: FormValidatorService,
    private cookieService: CookieService,
    private dataService: DataService,
    private _snack: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.formGroup = this.createForm();
  }

  ngOnInit(): void {}

  createForm(): FormGroup {
    return this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  createFormCode(){
    return this.fb.group({
      code: [null, [Validators.required]]
    })
  }

  logIn(): void {
    if (this.formGroup.invalid) return;

    if(!this.admin){
      this.user = this.formGroup.value;

      this.userService.logIn(this.user).subscribe(
        (r) => {
          this.cookieService.set("token", r.token);
          this.dataService.setLoggedValue(this.cookieService.check("token"));
          // this.redirection('/admin/hello');
        },
        (err) => {
          if(err.error.errors){
            this.openSnack("snack-error", this.getMessage(err));
            this.admin = true
            this.formCode = this.createFormCode()
          }else{
            this.openSnack("snack-error", err.error.message);
            this.admin = false
          }
        }  
      );
    }else{
      if(this.formCode.invalid) return;

      this.user = this.formGroup.value;
      this.user['code'] = this.formCode.value.code

      this.userService.logIn(this.user).subscribe(
        (r) => {
          this.cookieService.set("token", r.token);
          this.dataService.setLoggedValue(this.cookieService.check("token"));
          // this.redirection('/admin/hello');
        },
        (err) => {
          this.openSnack("snack-error", err.error.message);
        }  
      );
    }
  }

  getMessage(err:any): string{
    const message = err.error.message;
    let errors = '';
    if (err.error.errors) {
      for (const key in err.error.errors) {
        if (err.error.errors.hasOwnProperty(key)) {
          errors += err.error.errors[key].join(', ') + ', ';
        }
      }
      errors = errors.slice(0, -2);
    }
    return `${message} ${errors}`;
  }

  redirection(path: string): void {
    if (this.auth.getAuthToken()) this.router.navigate([path]);
  }

  showAlert(message: string) {
    const config = {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    };
    this.alert.open(message, "Cerrar", config);
  }

  openSnack(color: string, message: string): void {
    this._snack.openFromComponent(NotificationsComponent, {
      panelClass: [color],
      data: { message },
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  register(){
    const dialogRef = this.dialog.open(RegisterUserComponent, {
      width: '25%',
      height: 'auto'
    })
  }
}
