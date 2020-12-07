import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { urlApi } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {

  }

  getProduct(page: number, size: number){
    const url=`${urlApi}\product?${page}&${size}`
    this.http.get(url).pipe()
  }
}
