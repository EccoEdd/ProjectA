import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from "@angular/core";

import { Datetimepicker, Input as InputTe, initTE } from "tw-elements";

@Component({
  selector: "app-datetime",
  templateUrl: "./datetime.component.html",
  styleUrls: ["./datetime.component.css"],
})
export class DatetimeComponent implements AfterViewInit {
  @Input() title: string = "Fecha y hora";
  @Input() invalid: boolean = false;
  @Input() value: string = null;
  @ViewChild("datetimepickertranslated", { static: true })
  datetime: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    initTE({ Datetimepicker, Input: InputTe });
    new Datetimepicker(this.datetime.nativeElement, {
      inline: true,
      datepicker: {
        title: this.title,
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
      },
      timepicker: {
        cancelLabel: "Cancelar",
        clearLabel: "Limpiar",
        invalidLabel: "Formato de tiempo inválido",
        okLabel: "Ok",
      },
    });
  }
}
