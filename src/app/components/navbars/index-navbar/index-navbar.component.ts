import { Component, OnInit } from "@angular/core";
import { DataService } from "app/services/data.service";

@Component({
  selector: "app-index-navbar",
  templateUrl: "./index-navbar.component.html",
})
export class IndexNavbarComponent implements OnInit {
  navbarOpen = false;
  active: boolean;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.logged.subscribe((result) => {
      this.active = result;
    });
  }

  setNavbarOpen() {
    this.navbarOpen = this.active;
  }
}
