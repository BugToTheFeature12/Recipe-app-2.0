import { Component, OnInit } from '@angular/core';

import {Recepie} from'../recepies.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
recepies: Recepie[] = [
  new Recepie('Fasirt', 'Tojasos fasirt',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5aNl-svCFWziE9wIdJ0EJILp5R5fTu8mhHCmn7ucaxwq787r4' ),
  new Recepie('Tejberizs', 'Fahejas tejberizs',
    'http://www.receptlap.hu/kepek/421x289/13633499071477.jpg' )
];

  constructor() { }

  ngOnInit() {
  }

}
