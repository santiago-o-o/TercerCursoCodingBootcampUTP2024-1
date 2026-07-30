import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  gifs: any[] = [];
  APIKey : string = "6CVMkGByfkOGRqiZmiOstBNg3oIumsFD";

  constructor(private http: HttpClient) {}

  searchGifs(search_query: string): Observable<any>{
    return this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this.APIKey}&q=${search_query}&limit=10`)
  }
}
