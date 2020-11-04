import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grab',
  templateUrl: './grab.component.html',
  styleUrls: ['./grab.component.css']
})
export class GrabComponent implements OnInit {

  dropdown=['Birthday','Anniversary','Baby shower',
  'Valentines day','Christmas','Halloween','Thanks Giving','New Year'];
  constructor() { }

  ngOnInit(): void {
  }

}
