import { Component } from '@angular/core';
import { SalesPerson } from './sales-person'; 
@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component-bootstrap.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent {

  salesPersonsList: SalesPerson[]=[
    new SalesPerson("arun","a","arun@gmail.com",20),
    new SalesPerson("varun","v","varun@gmail.com",30),
    new SalesPerson("tharun","k","tharun@gmail.com",40),
    new SalesPerson("john","a","john@gmail.com",10),
  ]; 




}
