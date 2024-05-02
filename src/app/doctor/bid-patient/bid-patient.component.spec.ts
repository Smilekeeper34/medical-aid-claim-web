import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidPatientComponent } from './bid-patient.component';

describe('BidPatientComponent', () => {
  let component: BidPatientComponent;
  let fixture: ComponentFixture<BidPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BidPatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BidPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
