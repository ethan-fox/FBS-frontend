import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiUrlBase = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getArticles(): Observable<any> {

    var reqUrl = this.apiUrlBase + '/getAllArticleIDs';

    return this.http.get<any>(reqUrl); 
  }
}
