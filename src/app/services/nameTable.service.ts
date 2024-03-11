import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NameTableService {
  private selectedName = new BehaviorSubject<string>('');

  setSelectedCategoryName(name: string) {
    this.selectedName.next(name);
  }

  getSelectedCategoryName() {
    return this.selectedName.asObservable();
  }
}


import { Observable } from 'rxjs';

export class DataManager<type> {
  private dataSubject: BehaviorSubject<type> = new BehaviorSubject<type>(null);
  public data: Observable<type> = this.dataSubject.asObservable();

  public get dataValue(): type {
    return this.dataSubject.value;
  }

  public setData(data: type): void {
    this.dataSubject.next(data);
  }
}