import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiServerUrl = environment.apiBaseUrl;
  authKey!: any;
  constructor(private http: HttpClient) {

   }

  public getproduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiServerUrl}/product/all`);
  }
}
