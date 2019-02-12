import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  private articleData: any;

  constructor(private svc: ArticleService) { }

  ngOnInit() {
    this.svc.getArticles().subscribe(data => {
      this.articleData = data;
    });
  }

}
