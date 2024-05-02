import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approve-doctor',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './approve-doctor.component.html',
  styleUrl: './approve-doctor.component.scss'
})
export class ApproveDoctorComponent {
  products: any[] = [];
  statusList: string[] = ['SEND_TO_DR'];
  selectedStatus: string = 'SEND_TO_DR';
  dataAvailable: boolean = true; // Property to track data availability

  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.http.get<any>(`https://claims-ef0j.onrender.com/api/v1/claims/find-by-status/${this.selectedStatus}`)
      .subscribe(response => {
        this.products = response.content;
        this.dataAvailable = this.products.length > 0; // Update dataAvailable based on fetched data
      }, error => {
        console.error('Error fetching data:', error);
      });
  }

  onStatusChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedStatus = selectedValue;
    this.fetchData();
  }
  onSetPrice(claimNumber: string) {
    // Pass claim number to another component using router navigation
    this.router.navigate(['admin/set-prices'], { queryParams: { claimNumber: claimNumber } });
  }
}
