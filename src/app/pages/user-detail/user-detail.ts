import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user';

@Component({
  selector: 'app-user-detail',
  imports: [ActivatedRoute, RouterLink],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetail implements OnInit{

    constructor(
    private activateRoute: ActivatedRoute,
    private userService: UserService,
    private cdr: ChangeDetectorRef,
    private router: Router
)

  ngOnInit() {
    const id = this.activateRoute.snapshot.paramMap.get('id')
    if(id){
    this.userService.buscarPorId(parseInt(id)).subscribe((user) => {
      this.user = user;
      this.cdr.detectChanges();

    });
    }

  }
}
