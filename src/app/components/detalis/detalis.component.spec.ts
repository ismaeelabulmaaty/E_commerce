import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalisComponent } from './detalis.component';

describe('DetalisComponent', () => {
  let component: DetalisComponent;
  let fixture: ComponentFixture<DetalisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DetalisComponent]
    });
    fixture = TestBed.createComponent(DetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
