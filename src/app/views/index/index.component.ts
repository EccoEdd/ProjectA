import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
})
export class IndexComponent implements OnInit {
  constructor(
    private cookieService: CookieService
  ) {}
  
  token: boolean = false
  ngOnInit(): void {
    this.token = this.cookieService.check('token')
  }
}
