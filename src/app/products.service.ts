import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Sneaker } from '../sneakers';
import { SNEAKERS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private sneakersUrl = 'api/sneakers';  // URL to web api

  getProduct(id: number): Observable<Sneaker> {
    const url = `${this.sneakersUrl}/${id}`;
    return this.http.get<Sneaker>(url)
  }

  /** GET heroes from the server */
  getProducts(): Observable<Sneaker[]> {
  return this.http.get<Sneaker[]>(this.sneakersUrl)
}
  constructor(
  private http: HttpClient,) { }
}


