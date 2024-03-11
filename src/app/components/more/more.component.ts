import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { UserComponent } from "app/components/user/user.component";
import { Collapse, Dropdown, initTE } from "tw-elements";
import { MatSnackBar } from "@angular/material/snack-bar";
import { CookieService } from "ngx-cookie-service";
import { DataService } from "app/services/data.service";
import { UserService } from "../apiservices/user.service";

@Component({
  selector: "app-more",
  templateUrl: "./more.component.html",
  styleUrls: ["./more.component.css"],
})
export class MoreComponent {
  constructor(
    public dialog: MatDialog,
    private dataService: DataService,
    private alert: MatSnackBar,
    private cookieService: CookieService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    initTE({ Collapse, Dropdown });
  }

  userInfo(): void {
    const dialogRef = this.dialog.open(UserComponent, {
      panelClass: ["dialog-responsive"],
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  logOut() {
    this.userService.logOut().subscribe((result) => {
      this.alert.open(result.message, null);
      this.dataService.clear();
      this.cookieService.delete("token", "/");
      this.cookieService.delete("table", "/");
    });
    
    window.location.href = "";
    window.location.reload()
  }
}
