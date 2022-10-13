import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public http: HttpClient) { }

  getAllNews(): Observable<any> {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=131bf7dff8c645f5ad4d1a707c7b6144').pipe(
      map(res => res)
    );
  }
}
