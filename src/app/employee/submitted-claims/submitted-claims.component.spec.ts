import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedClaimsComponent } from './submitted-claims.component';

describe('SubmittedClaimsComponent', () => {
  let component: SubmittedClaimsComponent;
  let fixture: ComponentFixture<SubmittedClaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmittedClaimsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmittedClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
