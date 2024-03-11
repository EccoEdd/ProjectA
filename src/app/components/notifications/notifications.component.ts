import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {

  message: string = '';

  constructor(
    public snackBarRef: MatSnackBarRef<NotificationsComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) { this.message = data.message }

}
