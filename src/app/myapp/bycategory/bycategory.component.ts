import { ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { NewapiservicesService } from 'src/app/sevice/newapiservices.service';

@Component({
  selector: 'app-bycategory',
  templateUrl: './bycategory.component.html',
  styleUrls: ['./bycategory.component.css']
})
export class BycategoryComponent implements AfterViewInit{

  categoryDisplay :any;
  @Input() categoryitem :any;
  @Input() loading : boolean | undefined;
  topHeadingDisplay : any =[];
  
  constructor(private _service : NewapiservicesService, private cd : ChangeDetectorRef){}
  ngAfterViewInit(): void {
   this.cd.detectChanges();
  }


  ngOnInit(): void {
    this._service.topHeading().subscribe((result)=>{
      this.topHeadingDisplay = result.articles;
    })
  }

  
}
