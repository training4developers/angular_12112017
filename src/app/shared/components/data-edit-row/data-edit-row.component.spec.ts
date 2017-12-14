import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEditRowComponent } from './data-edit-row.component';

describe('DataEditRowComponent', () => {
  let component: DataEditRowComponent;
  let fixture: ComponentFixture<DataEditRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataEditRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataEditRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
