import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-simple-page',
  templateUrl: './simple-page.component.html',
  styleUrls: ['./simple-page.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SimplePageComponent implements OnInit {
  isTableExpanded = false;

  STUDENTS_DATA = [
    {
      "id": 1,
      "name": "Abby Jaskolski ",
      "vintage" : "1950's",
      "quantity": '02',
      "volume":'Standard (750ml)',
      "cost": 59.95,
      "isExpanded": false,
     
    },
    {
      "id": 2,
      "name": "Jabari Fritsch",
      "vintage" : "2021",
      "quantity": '09',
      "volume":'Magnum (1500ml)',
      "cost": 73.97,
      "isExpanded": false,
     
    },
    {
      "id": 3,
      "name": "Maybell Simonis",
      "vintage" : "2021",
      "quantity": '05',
      "volume":'Old Ball (1500ml)',
      "cost": 85.04,
      "isExpanded": false,
      
    }
  ];


  dataStudentsList = new MatTableDataSource();
  displayedStudentsColumnsList: string[] = ['id', 'name', 'rating','vintage','quantity','volume','cost', 'actions'];


  ngOnInit() {
    this.dataStudentsList.data = this.STUDENTS_DATA;
  }

  // Toggel Rows
  toggleTableRows() {
    this.isTableExpanded = !this.isTableExpanded;

    this.dataStudentsList.data.forEach((row: any) => {
      row.isExpanded = this.isTableExpanded;
    })
  }

}
