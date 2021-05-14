import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NewsService } from '../news.service'

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
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
