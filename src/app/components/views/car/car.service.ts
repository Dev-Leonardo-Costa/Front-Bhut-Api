import { Car } from './car-read/car.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll():Observable<Car[]>{
    const url =  `${this.baseUrl}/listCars`
    return this.http.get<Car[]>(url)
  }

  create(car: Car): Observable<Car> {
    const url =  `${this.baseUrl}/cars`
    return this.http.post<Car>(url, car);
  }
}
