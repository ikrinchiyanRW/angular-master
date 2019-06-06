import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserInterface } from '../../../../interfaces';
import { ApiService, UserListModel } from '../../../core/services';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  displayedColumns = ['first_name', 'last_name', 'email'];
  userList: any[] = [];
  pageSize: number = 3;
  pagesCount: number;
  pageIndex: number;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.data.pipe(
      map(data => data.model)
    )
      .subscribe((model: UserListModel) => {
        this.userList = model.data;
        this.pagesCount = model.total;
        this.pageIndex = model.page > 0 ? model.page - 1 : 0;
      });
  }

  pageChanged(event: PageEvent): void {
    let page: number = event.pageIndex + 1;
    this.router.navigate(['./'], { queryParams: { page } });
  }

  userSelected(user: UserInterface): void {
    this.router.navigate(['./user', user.id]);
  }
}
