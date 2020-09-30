import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  subject = new Subject<string>();
  constructor() {}

  setUserName(username: string) {
    this.subject.next(username);
  }

  getUserName(): Observable<string> {
    //called by HeaderComp, ProfileComp
    return this.subject.asObservable();
  }
}
