import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-claims',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-claims.component.html',
  styleUrl: './employee-claims.component.scss'
})
export class EmployeeClaimsComponent {
  products: any[] = [];
  statusList: string[] = ['APPROVED', 'PENDING', 'SEND_TO_DR', 'SEND_BACK_TO_ADMIN', 'NOT_APPROVED'];
  selectedStatus: string = 'APPROVED';
  dataAvailable: boolean = true; // Property to track data availability

  constructor(private http: HttpClient) {}

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
