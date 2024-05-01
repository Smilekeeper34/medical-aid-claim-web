import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimAssignmentComponent } from './claim-assignment.component';

describe('ClaimAssignmentComponent', () => {
  let component: ClaimAssignmentComponent;
  let fixture: ComponentFixture<ClaimAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimAssignmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClaimAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
