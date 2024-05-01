import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsClaimListComponent } from './doctors-claim-list.component';

describe('DoctorsClaimListComponent', () => {
  let component: DoctorsClaimListComponent;
  let fixture: ComponentFixture<DoctorsClaimListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorsClaimListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorsClaimListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
