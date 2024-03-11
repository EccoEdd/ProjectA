import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderListComponent } from './loader-list.component';

describe('LoaderListComponent', () => {
  let component: LoaderListComponent;
  let fixture: ComponentFixture<LoaderListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderListComponent]
    });
    fixture = TestBed.createComponent(LoaderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
