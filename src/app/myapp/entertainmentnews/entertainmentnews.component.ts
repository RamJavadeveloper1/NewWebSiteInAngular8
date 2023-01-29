import { Component, OnInit } from '@angular/core';
import { NewapiservicesService } from 'src/app/sevice/newapiservices.service';

@Component({
  selector: 'app-entertainmentnews',
  templateUrl: './entertainmentnews.component.html',
  styleUrls: ['./entertainmentnews.component.css']
})
export class EntertainmentnewsComponent implements OnInit {

  entertainmentDisplay: any = []
  constructor(private _service: NewapiservicesService) { }

  ngOnInit(): void {
    this._service.entertainment().subscribe((result) => {
      this.entertainmentDisplay = result.articles;
    })
  }
}
