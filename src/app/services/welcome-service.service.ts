import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WelcomeServiceService {
  constructor(private http: HttpClient) {}

  urlCategory: string = 'https://opentdb.com/api_category.php';

  getCategory(): Observable<any> {
    return this.http.get(this.urlCategory);
  }
}
