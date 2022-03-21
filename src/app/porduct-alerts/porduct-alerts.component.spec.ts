import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorductAlertsComponent } from './porduct-alerts.component';

describe('PorductAlertsComponent', () => {
  let component: PorductAlertsComponent;
  let fixture: ComponentFixture<PorductAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorductAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorductAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
