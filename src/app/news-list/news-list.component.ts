import { Component, OnInit } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { NewsService } from '../news.service'

type Article = {
  source: {
    id: string,
    name: string
  },
  author: string,
  title: string,
  description: string,
  url: string
  urlToImage: string
  publishedAt: Date
  content: string
}

export type News = {
  status: 'OK'
  totalResults: number
  articles: Article[]
}

@Component({
  selector: 'app-news-list',
  template: `
    <nz-content class="content">
      <nz-list class="news-list" *ngIf='news'>
        <nz-list-item *ngFor="let news of news.articles">
          <a href={{news.url}} class="anchor">
            <div class="thumbnail">
              <img class="img" src={{news.urlToImage}} alt={{news.title}}>
            </div>
            <div>
              <nz-list-item-meta-title>{{news.title}}</nz-list-item-meta-title>
              <p class="text">{{news.content}}</p>
            </div>
          </a>
        </nz-list-item>
      </nz-list>
    </nz-content>
  `,
  styles: [
    `
      .content {
        padding: 50px;

        background: #f2f2f2;
      }
    `,
    `
      .news-list {
        max-width: 800px;
        background: #FFF;
        padding: 20px;
        margin: auto;
      }
    `,
    `
      .thumbnail {
        width: 240px;
        height: auto;
        flex-shrink: 0;
        margin-right: 15px;
        > img {
          width: 100%;
          height: auto;
          display: block;
        }
      
  }
  .anchor {
        display: flex;
      }
  `
  ]
})

export class NewsListComponent implements OnInit {
  news: News | undefined  = undefined

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getNews()
  }

  getNews() {
    this.newsService.getNews().subscribe((data: News) => {
      console.log(data)
      this.news = {...data}
    });
  }
}
