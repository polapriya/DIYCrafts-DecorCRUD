import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-editor',
  templateUrl: './view-editor.component.html',
  styleUrls: ['./view-editor.component.css']
})
export class ViewEditorComponent implements OnInit {
  
  dropdown=['Birthday','Anniversary','Baby shower',
  'Valentines day','Christmas','Halloween','Thanks Giving','New Year'];
  name= this.dropdown;
  
  constructor() { }

  ngOnInit(): void {
  }

}
