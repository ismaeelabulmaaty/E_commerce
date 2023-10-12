import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpasswoedComponent } from './forgotpasswoed.component';

describe('ForgotpasswoedComponent', () => {
  let component: ForgotpasswoedComponent;
  let fixture: ComponentFixture<ForgotpasswoedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ForgotpasswoedComponent]
    });
    fixture = TestBed.createComponent(ForgotpasswoedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
