import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorBidsClaimComponent } from './doctor-bids-claim.component';

describe('DoctorBidsClaimComponent', () => {
  let component: DoctorBidsClaimComponent;
  let fixture: ComponentFixture<DoctorBidsClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorBidsClaimComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorBidsClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
