import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class craftService {
    constructor(private http:HttpClient) {}
    // Uses http.get() to load data 
    getCraft() {
        return this.http.get('http://localhost:8000/craft');
    }
// Uses http.post() to post data 
addCrafts(Fiesta: string,Publisher: string, CostDetails: string, EquipmentRequired: string, ImageURL: string, YoutubeLink: string) {
    this.http.post('http://localhost:8000/craft',{Fiesta, Publisher, CostDetails, EquipmentRequired, ImageURL, YoutubeLink })
  .subscribe((responseData) => {
     console.log(responseData);
   }); 
}
deleteCraft(craftId: string) {
    this.http.delete("http://localhost:8000/craft/" + craftId)
      .subscribe(() => {
          console.log('Deleted: ' + craftId);
      });
  }
}
