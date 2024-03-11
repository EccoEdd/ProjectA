import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  AfterViewChecked,
  ChangeDetectorRef,
} from "@angular/core";
import { DataService } from "app/services/data.service";
import { NameTableService, DataManager } from "app/services/nameTable.service";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-header-stats",
  templateUrl: "./header-stats.component.html",
})
export class HeaderStatsComponent {
  name: string;

  constructor(private dataService: DataService) {
    this.dataService.view.subscribe((view) => {
      this.name = view;
    });
  }
}
