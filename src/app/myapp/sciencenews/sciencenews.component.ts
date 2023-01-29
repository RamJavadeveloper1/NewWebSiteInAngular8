import { Component, OnInit } from '@angular/core';
import { NewapiservicesService } from 'src/app/sevice/newapiservices.service';


@Component({
  selector: 'app-sciencenews',
  templateUrl: './sciencenews.component.html',
  styleUrls: ['./sciencenews.component.css']
})
export class SciencenewsComponent  implements OnInit{

  scienceDisplay: any = []

  constructor(private _service : NewapiservicesService){}

  ngOnInit(): void {
    this._service.science().subscribe((result) => {
      this.scienceDisplay = result.articles;
    })
  }

}
