import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorClaimListComponent } from './doctor-claim-list.component';

describe('DoctorClaimListComponent', () => {
  let component: DoctorClaimListComponent;
  let fixture: ComponentFixture<DoctorClaimListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorClaimListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorClaimListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
