import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import {
  Animate
} from "tw-elements";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements AfterViewInit {

  @ViewChild("content") content: ElementRef;

  constructor(private router: Router) {
  }

  ngAfterViewInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        new Animate(this.content.nativeElement, {
          animation: "[fade-in_1s_ease-in-out]",
          animationReset: true,
          animationStart: "onLoad",
        });
      }
    })
  }

}
