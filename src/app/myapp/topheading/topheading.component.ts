import { Component, OnInit } from '@angular/core';
import { NewapiservicesService } from 'src/app/sevice/newapiservices.service';
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
      console.log(result);
      this.topHeadingDisplay = result.articles;
    })
  }

}
