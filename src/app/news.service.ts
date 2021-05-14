import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from './../environments/environment';

@Injectable()
export class NewsService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  newsUrl = `https://newsapi.org/v2/everything?q=tesla&from=2021-04-14&sortBy=publishedAt&apiKey=${environment.apiKey}`

  constructor(
    private http: HttpClient
  ) { }

  getNews(): Observable<any[]> {
      return this.http.get<any[]>(this.newsUrl)
  }
}
