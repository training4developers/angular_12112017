import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceChild1DemoComponent } from './service-child-1-demo.component';

describe('ServiceChild1DemoComponent', () => {
  let component: ServiceChild1DemoComponent;
  let fixture: ComponentFixture<ServiceChild1DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceChild1DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceChild1DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
