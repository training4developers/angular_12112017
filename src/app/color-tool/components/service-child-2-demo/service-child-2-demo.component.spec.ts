import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceChild2DemoComponent } from './service-child-2-demo.component';

describe('ServiceChild2DemoComponent', () => {
  let component: ServiceChild2DemoComponent;
  let fixture: ComponentFixture<ServiceChild2DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceChild2DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceChild2DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
