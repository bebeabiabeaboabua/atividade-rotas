import { Routes } from '@angular/router';
import { UsersListComponent } from './pages/users-list/users-list';
import { UserDetail } from './pages/user-detail/user-detail';

export const routes: Routes = [
  {
    path: 'users',
    component: UsersListComponent
  },
  {
    path: 'details/:id',
    component: UserDetail
  }
];
