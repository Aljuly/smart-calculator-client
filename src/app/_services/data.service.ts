import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {
  private baseUrl = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {
  }

  get_description(value: number) {
    const params = new HttpParams().set('id', String(value));
    return this.httpClient.request('GET', this.baseUrl + '/description', {responseType: 'json', params});
  }

  get_result(id: number, firstNumber: string, secondNumber: string) {
    const params = new HttpParams()
    .set('id', String(id)).set('firstnumber', firstNumber)
    .set('secondnumber', secondNumber);
    return this.httpClient.request('GET', this.baseUrl + '/calculate', {responseType: 'json', params});
  }
}

