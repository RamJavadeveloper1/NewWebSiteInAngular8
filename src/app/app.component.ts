import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NewapiservicesService } from './sevice/newapiservices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'localNewsWebsite';
  categoryDisplay :any;
  categoryitem: any
  constructor(private _service : NewapiservicesService){}

  ngOnInit(): void {
  }

  onSelected(value:string): void {
		//this.selectedTeam = value;
    this.categoryitem =value;
    this._service.byCategory =this.categoryitem;

    console.log();
	}

}
