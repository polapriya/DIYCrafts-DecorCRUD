import { Component, Input, OnInit } from '@angular/core';
import { idText } from 'typescript';
import { FormGroup, FormControl } from '@angular/forms';
import { craftService } from '../craft.service';  



@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
 
  @Input() Fiesta : string;
  @Input() Publisher : string;
  @Input() CostDetails : string;
  @Input() EquipmentRequired : string;
  @Input() ImageURL : string;
  @Input() YoutubeLink : string;
  constructor(private _myService: craftService){}
  onSubmit(){
    console.log("You submitted:Category Fiesta: " + this.Fiesta + " Publisher: "+ this.Publisher + " || CostDetails:" + this.CostDetails   +" ||Equipment Required: "+this.EquipmentRequired +"     || Image URL: " + this.ImageURL    +" || YouTube Link:" + this.YoutubeLink);
    
    this._myService.addCrafts(this.Fiesta,this.Publisher, this.CostDetails, this.EquipmentRequired,this.ImageURL, this.YoutubeLink);
  }
  ngOnInit(){

  }
}

