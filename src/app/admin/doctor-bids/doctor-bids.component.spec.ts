import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorBidsComponent } from './doctor-bids.component';

describe('DoctorBidsComponent', () => {
  let component: DoctorBidsComponent;
  let fixture: ComponentFixture<DoctorBidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorBidsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorBidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
