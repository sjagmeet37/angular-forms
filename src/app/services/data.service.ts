import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from '../models/user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient : HttpClient) { }


  handlePostRequest(userSettings : UserSettings) : Observable<any>{
    return this.httpClient.post('https://putsreq.com/k96TIAARXUkPjsmuidF6', userSettings);
  }

}
