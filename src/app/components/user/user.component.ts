import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { UserService } from "../apiservices/user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  user: any;

  constructor(
    public dialogRef: MatDialogRef<UserComponent>,
    public dialog: MatDialog,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getMyself().subscribe(
      (r) => {
        this.user = r.data;
      },
      (err) => {

      }
    );
  }
}
