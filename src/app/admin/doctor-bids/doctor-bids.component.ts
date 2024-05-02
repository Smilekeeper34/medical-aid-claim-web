import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-bids',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './doctor-bids.component.html',
  styleUrl: './doctor-bids.component.scss'
})
export class DoctorBidsComponent {
  products: any[] = [];
  statusList: string[] = ['SEND_BACK_TO_ADMIN'];
  selectedStatus: string = 'SEND_BACK_TO_ADMIN';
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
  
}
