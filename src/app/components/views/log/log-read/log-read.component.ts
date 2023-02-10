import { Log } from './log.model';
import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-log-read',
  templateUrl: './log-read.component.html',
  styleUrls: ['./log-read.component.css']
})
export class LogReadComponent implements OnInit {

  logs: Log[] = []

  displayedColumns: string[] = ['id', 'dateTimeEvent', 'idCar'];

  constructor(private service: LogService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
       console.log(resposta)
       this.logs = resposta;
    })
  }

}
