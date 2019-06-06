import { UserInterface } from 'src/interfaces/user.interface';

export interface UserListModel {
    data: UserInterface[];
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
  }
