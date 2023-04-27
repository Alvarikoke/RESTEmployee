import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private baseURL = 'http://dummy.restapiexample.com/api/v1'

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(`${this.baseURL}/employees`);
  }

  getEmployee(id: number) {
    return this.http.get(`${this.baseURL}/employee/${id}`);
  }

  createEmployee(data: any) {
    return this.http.post(`${this.baseURL}/create`, data);
  }
}
