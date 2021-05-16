import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NewsService } from '../news.service'

@Component({
  selector: 'app-news-list',
  template: `
    <nz-list>
      <nz-list-item *ngFor="let news of news.articles">
        <nz-list-item-extra>
          <img class="thumb" src={{news.urlToImage}} alt={{news.title}}>
        </nz-list-item-extra>
        <div>
          <nz-list-item-meta-title>{{news.title}}</nz-list-item-meta-title>
          <p class="text">{{news.content}}</p>
        </div>
      </nz-list-item>
    </nz-list>
  `,
  styleUrls: ['./news-list.component.scss']
})

export class NewsListComponent implements OnInit {
  news: any = {
    articles: []
  }

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getNews()
    console.log(this.news)
  }

  getNews() {
    this.newsService.getNews().subscribe((data: any) => {
      this.news = {...data}
      console.log(data)
    });
  }
}
