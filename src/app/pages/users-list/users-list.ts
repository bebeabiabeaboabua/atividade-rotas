import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user';
import { User } from '../../models/user';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users-list',
  imports: [ RouterLink, FormsModule],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css',
})
export class UsersList implements OnInit {
    @Input() id!: number;


  users: User[] = [];

  constructor(private userService: UserService, private cdr:ChangeDetectorRef) {}
isLoading = true
  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      this.isLoading = false
      this.cdr.detectChanges();
    });
  }

  searchTerm: string = '';

  get filteredUsers(): User[] {
  return this.users.filter(user =>
    user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
}

    hasResults(): boolean {
    return this.filteredUsers.length > 0;
  }

}
