import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserSettings } from '../models/user-settings';

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

  userSettings : UserSettings = {... this.orignalUserSettings}

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(form : NgForm) : void {
    console.log(form.valid);
  }

}
