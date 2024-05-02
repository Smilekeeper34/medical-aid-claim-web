import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctor-bids-claim',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doctor-bids-claim.component.html',
  styleUrl: './doctor-bids-claim.component.scss'
})
export class DoctorBidsClaimComponent {
  products: any[] = [];
  dataAvailable: boolean = true; // Property to track data availability

  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.http.get<any>('https://claims-ef0j.onrender.com/api/v1/proposed/list')
      .subscribe(response => {
        this.products = response.content;
        this.dataAvailable = this.products.length > 0; // Update dataAvailable based on fetched data
      }, error => {
        console.error('Error fetching data:', error);
      });
  }
  approveClaim(claimNumber: string, drEmail: string) {
    this.http.put<any>(`https://claims-ef0j.onrender.com/api/v1/claims/set-selected-Dr/${claimNumber}/${drEmail}`, {})
      .subscribe(response => {
        Swal.fire('Success', 'Claim approved successfully', 'success');
        // Refresh data after approval
        this.fetchData();
      }, error => {
        console.error('Error approving claim:', error);
        Swal.fire('Error', 'Failed to approve claim', 'error');
      });
  }
 
}
