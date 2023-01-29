import { Component, OnInit, Input } from '@angular/core';
import { NewapiservicesService } from 'src/app/sevice/newapiservices.service';
import { ComponentFixture } from '@angular/core/testing';
@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {
   topHeadingDisplay : any =[];


  constructor(private _service : NewapiservicesService){}

  ngOnInit(): void {
    this._service.topHeading().subscribe((result)=>{
      this.topHeadingDisplay = result.articles;
    })
  }



}
