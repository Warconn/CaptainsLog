import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from './API.service';
import { Captain } from '../types/captain';
import { Entry } from '../types/entry';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'amplify-angular-app';
  public createForm: FormGroup;

  /* declare restaurants variable */
  entries: Array<Entry>;

  constructor(private api: APIService, private fb: FormBuilder) 
  {   }

  async ngOnInit() {
    this.createForm = this.fb.group({
      'log': ['', Validators.required], 
    });
    this.api.ListEntrys().then(event => {
      this.entries = event.items;
    });
  
    /* subscribe to new restaurants being created */
    this.api.OnCreateEntryListener.subscribe( (event: any) => {
      const newEntry = event.value.data.OnCreateEntry;
      console.log("Event Data:");
      console.log(event.value.data);
      
      console.log("New Entry Found:");
      console.log(newEntry);
      this.entries = [newEntry, ...this.entries];
    });
  }

  public onCreate(entry: Entry) {
    var email = "";
    //add timestamp and currently logged in user 
    Auth.currentAuthenticatedUser().then((user) => {
      email = user.attributes.email;
    });
    entry.captain = email;
    entry.timestamp = Date.now().toString()

    console.log("Attempting to create new entry: ");
    console.log(entry);

    this.api.CreateEntry(entry).then(event => {
      console.log('item created!');
      this.createForm.reset();
    })
    .catch(e => {
      console.log('error creating entry...', e);
    });
  }
}