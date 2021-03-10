import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public signin(): void {
    if (this.userService.user.getValue() === null) {
      this.userService.signin('jla', 'toto');
    } else {
      this.userService.signout();
      this.router.navigate(['/', 'events']);
    }

  }

}
