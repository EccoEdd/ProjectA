import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../apiservices/user.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormValidatorService } from 'app/core/service/form-validator.service';
import { NotificationsComponent } from '../notifications/notifications.component';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  form: FormGroup

  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "top";

  validationMessages = {
    user_name: [{type: "required", message: "Necesitamos el usuario"}],
    email: [{type: "required", message: "Necesitmos el Correo"}],
    password: [{type: "required", message: "Necesitamos la contraseña"}]
  }

  user:any = {}

  constructor(
    private dialogRef: MatDialogRef<RegisterUserComponent>,
    private userService: UserService,
    private alert: MatSnackBar,
    private fb: FormBuilder,
    public formService: FormValidatorService,
    public dialog: MatDialog,
    private _snack: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.form = this.createForm()
  }

  createForm():FormGroup{
    return this.fb.group({
      user_name: [null, [Validators.required]],
      password: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]]
    })
  }

  save(){
    if(this.form.invalid) return

    this.user = this.form.value
    this.userService.register(this.user).subscribe(
      (r) => {
        this.openSnack("snack-success", r.message);
        this.closeModal()
      }, (err) => {
        this.openSnack("snack-error", this.getMessage(err));
      }
    )
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

  closeModal(){
    this.dialogRef.close()
  }

}
