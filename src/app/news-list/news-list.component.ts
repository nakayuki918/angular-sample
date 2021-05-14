import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NewsService } from '../news.service'

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  // news$: Observable<any[]>;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe(
      data => console.log(data)
    )
  }

}
