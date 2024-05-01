import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-approved-claims',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './approved-claims.component.html',
  styleUrl: './approved-claims.component.scss'
})
export class ApprovedClaimsComponent {
  products: any[] = []; // Array to hold the fetched data

  constructor(private http: HttpClient) {} // Inject HttpClient for making HTTP requests

  ngOnInit(): void {
    this.fetchData(); // Call the method to fetch data when the component initializes
  }

  fetchData() {
    // Make HTTP GET request to the API URL
    this.http.get<any>('https://claims-ef0j.onrender.com/api/v1/claims/find-by-status/APPROVED')
      .subscribe(response => {
        // Assign the received data to the products array
        this.products = response.content;
      }, error => {
        console.error('Error fetching data:', error);
      });
  }
}
