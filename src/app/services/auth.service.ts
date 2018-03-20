import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {
  constructor() {}

  authorize(username: string, password: string): Observable<boolean> {
    // in real world make call to the API and parse the response
    return new Observable<boolean>(observer => {
      localStorage.setItem('token', '123');
      observer.next(true);
      observer.complete();
    });
  }

  unauthorize() {
    localStorage.removeItem('token');
  }

  isAuthorized() {
    return !!localStorage.getItem('token');
  }
}
