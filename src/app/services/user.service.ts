import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3300';
  constructor(private http: HttpClient) { }

  public SignUpUser(user: User): Observable<User> {
    return this.http.post<User>(this.url + '/sign-up', user);
  }
  public SignInUser(user: User): Observable<User> {
    return this.http.post<User>(this.url + '/sign-in', user);
  }
  public getUserData(email: any): Observable<User> {
    return this.http.get<User>(this.url + '/user/' + email);
  }
}
