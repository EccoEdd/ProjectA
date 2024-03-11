import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from "@angular/core";
import { Datepicker, Input as InputTe, initTE } from "tw-elements";
import { DateTime } from "luxon";

@Component({
  selector: "app-date",
  templateUrl: "./date.component.html",
  styleUrls: ["./date.component.css"],
})
export class DateComponent {
  @Input() idName: string = "datepicker-translated";
  @Input() title: string = "Fecha";
  @Input() invalid: boolean = false;
  @Input() value: string = null;
  @Output() dateChange = new EventEmitter<string>();

  date: HTMLElement;
  datePicker: any;

  constructor() {}

  ngAfterViewInit() {
    initTE({ Datepicker, Input: InputTe });
    this.date = document.querySelector(`#${this.idName}`);
    this.datePicker = new Datepicker(this.date, {
      inline: true,
      title: this.title,
      format: "yyyy/mm/dd",
      monthsFull: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
      monthsShort: [
        "En",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic",
      ],
      weekdaysFull: [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles ",
        "Jueves",
        "Viernes",
        "Sábado",
      ],
      weekdaysShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
      weekdaysNarrow: ["D", "L", "M", "M", "J", "V", "S"],
      okBtnText: "Ok",
      clearBtnText: "Limpiar",
      cancelBtnText: "Cancelar",
    });

    this.date.addEventListener("dateChange.te.datepicker", (event: any) => {
      this.dateChange.emit(
        DateTime.fromJSDate(event.date).toFormat("yyyy-MM-dd")
      );
    });
  }
}
