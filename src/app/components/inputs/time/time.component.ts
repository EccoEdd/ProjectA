import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from "@angular/core";
import { Timepicker, Input as InputTe, initTE } from "tw-elements";
import { DateTime } from "luxon";

@Component({
  selector: "app-time",
  templateUrl: "./time.component.html",
  styleUrls: ["./time.component.css"],
})
export class TimeComponent {
  @Input() idName: string = "datepicker-translated";
  @Input() title: string = "Hora";
  @Input() invalid: boolean = false;
  @Input() value: string = null;
  @Output() timeChange = new EventEmitter<string>();

  time: HTMLElement;
  timePicker: any;

  constructor() {}

  ngAfterViewInit() {
    initTE({ Timepicker, Input: InputTe });
    this.time = document.querySelector(`#${this.idName}`);
    this.timePicker = new Timepicker(this.time, {
      format24: true,
      cancelLabel: "Cancelar",
      clearLabel: "Limpiar",
      invalidLabel: "Formato de tiempo inválido",
      okLabel: "Ok",
    });

    this.time.addEventListener("input.te.timepicker", (input: any) => {
      const value = input.target.value;
      const timeParse = DateTime.fromFormat(value, "HH:mm");
      const timeFormat = timeParse.toFormat("HH:mm:ss");
      this.timeChange.emit(timeFormat);
    });
  }
}
