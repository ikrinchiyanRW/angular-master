import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserInterface } from '../../../interfaces';
import { UserListModel } from './userListModel';

@Injectable()
export class ApiService {

  constructor(private http: Http) {
  }

  fetchUsers(page): Observable<UserListModel> {
    return this.http.get('https://reqres.in/api/users?page=' + page)
    .pipe(
      map(response => {
        return response.json();
      })
    );
  }

  fetchUserById(id: number): Observable<UserInterface> {
    return this.http.get(`https://reqres.in/api/users/${id}`)
      .pipe(
        map(
          response => response.json().data
        )
      );
  }

}
