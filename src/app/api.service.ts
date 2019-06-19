import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getnews:any;

  API_KEY = '5d726d14212645c9a488504ec255c2a3';
  constructor(private httpClient:HttpClient) { }

  public getNews(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }

}
