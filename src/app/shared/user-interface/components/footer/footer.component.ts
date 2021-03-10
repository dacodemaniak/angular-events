import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { environment } from './../../../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public user: BehaviorSubject<any>;
  public version: string;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user = this.userService.user;
    this.version = `${environment.version}`;
  }

}
