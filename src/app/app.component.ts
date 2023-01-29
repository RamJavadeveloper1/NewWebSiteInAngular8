import { LowerCasePipe } from '@angular/common';
import { ViewChild } from '@angular/core';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NewapiservicesService } from './sevice/newapiservices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'localNewsWebsite';
  loading = true;
  categoryDisplay :any;
  categoryitem: any;


  constructor(private _service : NewapiservicesService){}

  ngOnInit(): void {
  
  }

  onSelected(value:string): void {
    this.categoryitem =value;
    console.log(value);  
	}

}
