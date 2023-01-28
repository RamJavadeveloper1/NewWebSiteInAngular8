import { Injectable, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})

export class NewapiservicesService {

  private apiKey = 'b8a494445c434aad83b0855ba3237f0e';
  private newsapiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.apiKey}`;

  private _categorynewapi: any ;
  constructor(private _http : HttpClient) {
   }
  
  //techNewApi
  //category=technology
  techNewapiUrl =this.newsapiUrl+'&category=technology'
  //businessNewApi
 // category=business
  businessNewapiUrl = this.newsapiUrl+'&category=business'
  
  @Input() set byCategory(category:any){
    if(category == undefined){
      this._categorynewapi =this.newsapiUrl+'&category=business';
    }
    this._categorynewapi =this.newsapiUrl+'&category='+ category;
    console.log(this._categorynewapi);
    //return this._http.get()
  }

  get byCategory(): any {
    return this._categorynewapi;
}

  //topHeading()
  topHeading():Observable<any>{
    return this._http.get(this.newsapiUrl+'&category=general');
  }

  //techNew()
  techNews():Observable<any>{
    return this._http.get(this.techNewapiUrl);
  }

  business(): Observable<any>{
    return this._http.get(this.businessNewapiUrl);
  }

 
}
