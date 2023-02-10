import { Car } from '../car-read/car.model';
import { CarService } from './../car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {

  car: Car = {
    title: '',
    brand: '',
    price: '',
    age: ''
  }

  constructor(private service: CarService) { }

  ngOnInit(): void {
    this.create();
  }

  create(): void{
    this.service.create(this.car).subscribe((resposta) => {
        console.log(resposta)
  })

  }

}
