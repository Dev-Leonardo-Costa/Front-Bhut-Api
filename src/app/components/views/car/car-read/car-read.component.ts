import { Car } from './car.model';
import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-read',
  templateUrl: './car-read.component.html',
  styleUrls: ['./car-read.component.css']
})
export class CarReadComponent implements OnInit {

  cars: Car[] = []

  displayedColumns: string[] = ['_id', 'title', 'brand', 'price', 'age', '__v'];
  
  constructor(private service: CarService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
       this.cars = resposta;
    })
  }

}
