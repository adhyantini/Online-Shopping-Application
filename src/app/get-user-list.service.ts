import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetUserListService {
  userList: Array<any>;
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  }
}
