import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bid-patient',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './bid-patient.component.html',
  styleUrl: './bid-patient.component.scss'
})
export class BidPatientComponent {
  claimNumber: string;
  setPriceForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.claimNumber = params['claimNumber'];
    });

    this.setPriceForm = this.fb.group({
      drEmail: ['', [Validators.required, Validators.email]],
      currency: ['', Validators.required],
      description: ['', Validators.required],
      proposedAmount: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.setPriceForm.valid) {
      const requestBody = {
        drEmail: this.setPriceForm.value.drEmail,
        claimNumber: this.claimNumber,
        currency: this.setPriceForm.value.currency,
        description: this.setPriceForm.value.description,
        proposedAmount: this.setPriceForm.value.proposedAmount,
      };

      this.http
        .put<any>(
          'https://claims-ef0j.onrender.com/api/v1/proposed/set-price',
          requestBody
        )
        .subscribe(
          () => {
            Swal.fire({
              title: 'Success!',
              text: 'Doctors Bid has been set successfully.',
              icon: 'success',
              confirmButtonText: 'Okay',
            });
          },
          (error) => {
            Swal.fire({
              title: 'Error!',
              text: 'Failed to bid for Doctor. Please try again.',
              icon: 'error',
              confirmButtonText: 'Okay',
            });
          }
        );
    }
  }
}
