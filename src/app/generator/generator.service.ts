import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Product } from './product';
import { delay, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  private apiServerUrl = environment.apiBaseUrl;
  authKey!: any;
  constructor(private http: HttpClient) { }



  public addGenerator(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiServerUrl}/product/add`, product);
  }
}
