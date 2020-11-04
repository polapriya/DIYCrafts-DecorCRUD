import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { craftService } from './craft.service';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  imagepath: string='https://lh3.googleusercontent.com/YQtrU_PqeJKYR0w6u0sTNnBBc2213Md8HvHRPt4NY6IYpHkwGjSuTzl1Mg2w_399-Q';
  title = 'DIY DECOR';
  tagline='Love The little Things You do';
  name = new FormControl(' ');
  todayDate = Date.now();
  public crafts;
  //initialize the call using StudentService 
  constructor(private _myService: craftService) { }
  ngOnInit() {
    this.getcraft();
  }
  //method called OnInit
  getcraft() {
   this._myService.getCraft().subscribe(
      //read data and assign to public variable students
      data => { this.crafts = data},
      err => console.error(err),
      () => console.log('finished loading')
    );
  }
  onDelete(craftID: string) {
    this._myService.deleteCraft(craftID);
  } 
}

