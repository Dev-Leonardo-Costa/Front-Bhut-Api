import { CarCreateComponent } from './components/views/car/car-create/car-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { CarReadComponent } from './components/views/car/car-read/car-read.component';
import { LogReadComponent } from './components/views/log/log-read/log-read.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
   path: 'cars',
   component: CarReadComponent 
  },
  {
    path: 'cars/create',
    component: CarCreateComponent 
   },
  {
  path: 'logs',
  component: LogReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
