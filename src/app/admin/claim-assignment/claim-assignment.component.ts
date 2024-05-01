import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../../../tools/services/auth.service';
import { UserService } from '../../../tools/services/user.service';

@Component({
  selector: 'app-claim-assignment',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './claim-assignment.component.html',
  styleUrl: './claim-assignment.component.scss'
})
export class ClaimAssignmentComponent {
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
    });
  }

  ngOnInit(): void {
    // this.authService.isLoggedIn()
  }

  onSubmit() {
    if (this.productForm.valid) {
      const formData = {
        drEmail: this.productForm.value.employeeEmail,
        claimNumber: this.productForm.value.patientEmail
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

      // Make PUT request to API
      this.http
        .put<any>(
          `https://claims-ef0j.onrender.com/api/v1/proposed/assign-to-dr/${formData.claimNumber}/${formData.drEmail}`,
          formData
        )
        .subscribe(
          (response) => {
            // Handle success
            Swal.fire({
              icon: 'success',
              title: 'Success!',
              text: 'Claim assigned to a Doctor successfully!',
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
