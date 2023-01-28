import { Component,OnInit } from '@angular/core';
import { NewapiservicesService } from 'src/app/sevice/newapiservices.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

techNewsDispaly : any = [];

  constructor(private _service : NewapiservicesService){

  }

  ngOnInit(): void {
   this._service.techNews().subscribe((result)=>{
        this.techNewsDispaly = result.articles;
   })
  }

  ngOnDestroy() {
    if (this._service.techNews()) {
      this._service.techNews().subscribe().unsubscribe;
    }
  }

}
