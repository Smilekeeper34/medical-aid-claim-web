import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://claims-ef0j.onrender.com/api/v1/claims/list';
  private salesUrl ='https://claims-ef0j.onrender.com/api/v1/claims/list';
  constructor(private http: HttpClient) { }

  getProductList(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getSalesList():Observable<any>{
    return this.http.get<any>(this.salesUrl);
  }
}
