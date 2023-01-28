import { Component, OnInit } from '@angular/core';
import { NewapiservicesService } from 'src/app/sevice/newapiservices.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {

  businessDisplay: any = []
  constructor(private _service: NewapiservicesService) { }

  ngOnInit(): void {
    this._service.business().subscribe((result) => {
      this.businessDisplay = result.articles;
    })
  }

}
