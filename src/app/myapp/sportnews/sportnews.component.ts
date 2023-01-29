import { Component, OnInit } from '@angular/core';
import { NewapiservicesService } from 'src/app/sevice/newapiservices.service';

@Component({
  selector: 'app-sportnews',
  templateUrl: './sportnews.component.html',
  styleUrls: ['./sportnews.component.css']
})
export class SportnewsComponent implements OnInit {

  sportDisplay: any = []

  constructor(private _service : NewapiservicesService){}

  ngOnInit(): void {
    this._service.sport().subscribe((result) => {
      this.sportDisplay = result.articles;
    })
  }
}
