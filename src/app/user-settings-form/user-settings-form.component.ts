import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserSettings } from '../models/user-settings';
import { DataService } from '../services/data.service';

@Component({
  selector: 'af-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
//can be initialized in oninit
  orignalUserSettings : UserSettings = {
    name:"Mil",
    subscriptionType:1,
    emailOffers : true,
    interfaceStyle : "light" 
  };

  hasError : boolean = false;
  errorMessage : string = "";

  userSettings : UserSettings = {... this.orignalUserSettings}

  constructor(private dataSetvice: DataService) { }

  ngOnInit(): void {
  }

  onFormError(obj : any) : void{
      this.hasError = true;
      this.errorMessage = obj.error.errorMessage;
  } 

  onFormSubmit(form : NgForm) : void {
    console.log(form.valid);

    if(form.valid){
      this.dataSetvice.handlePostRequest(this.userSettings).subscribe(
        result => console.log(result),
        error => this.onFormError(error)
      );
    } else {
      this.hasError = true
      this.errorMessage = "Please resolve errors"
    }

  }

}
