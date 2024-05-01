import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../../../tools/services/auth.service';
import { UserService } from '../../../tools/services/user.service';

@Component({
  selector: 'app-add-claim',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './add-claim.component.html',
  styleUrl: './add-claim.component.scss',
})
export class AddClaimComponent {
  currentUser: any;
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.productForm = this.fb.group({
      patientEmail: ['', Validators.required],
      employeeEmail: ['', Validators.required],
      address: ['', Validators.required],
      description: ['', Validators.required],
      // dateOfIncident: ['', Validators.required],
      status: ['PENDING'],
    });
  }

  ngOnInit(): void {
    // this.authService.isLoggedIn()
  }

  onSubmit() {
    if (this.productForm.valid) {
      const formData = {
        claimNumber: this.productForm.value.employeeEmail,
        patientEmail: this.productForm.value.patientEmail,
        address: this.productForm.value.address,
        // dateOfIncident: this.productForm.value.dateOfIncident,
        description: this.productForm.value.description,
        status: this.productForm.value.status,
      };

      // Show loading spinner
      Swal.fire({
        title: 'Please wait...',
        showConfirmButton: false,
        allowOutsideClick: false,
        willOpen: () => {
          Swal.showLoading();
        },
      });

      // Make POST request to API
      this.http
        .post<any>(
          'https://claims-ef0j.onrender.com/api/v1/claims/save',
          formData
        )
        .subscribe(
          (response) => {
            // Handle success
            Swal.fire({
              icon: 'success',
              title: 'Success!',
              text: 'Claim submitted successfully!',
            });
            // Reset form after successful submission
            this.productForm.reset();
          },
          (error) => {
            // Handle error
            console.error('Error:', error);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong. Please try again later!',
            });
          }
        );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Form invalid. Please fill in all required fields!',
      });
    }
  }
}
