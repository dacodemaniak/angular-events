import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public user: BehaviorSubject<any>;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user = this.userService.user;
  }

}
