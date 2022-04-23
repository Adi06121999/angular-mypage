import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css']
})
export class NewcompComponent implements OnInit {
  value1:string | undefined;
  coursename:string[]=['Java','PHP','C++','Python'];

  constructor() { }

  ngOnInit(): void {
  }
  
 


}
