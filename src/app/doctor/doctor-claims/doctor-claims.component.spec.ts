import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorClaimsComponent } from './doctor-claims.component';

describe('DoctorClaimsComponent', () => {
  let component: DoctorClaimsComponent;
  let fixture: ComponentFixture<DoctorClaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorClaimsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
