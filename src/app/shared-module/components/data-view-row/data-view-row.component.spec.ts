import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataViewRowComponent } from './data-view-row.component';

describe('DataViewRowComponent', () => {
  let component: DataViewRowComponent;
  let fixture: ComponentFixture<DataViewRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataViewRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataViewRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
