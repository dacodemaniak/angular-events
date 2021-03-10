import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: any[] =  [
    {
      username: 'jla',
      password: 'toto',
      isAdmin: true
    },
    {
      username: 'guest',
      password: 'titi',
      isAdmin: false
    }
  ];
  public user: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { }

  public signin(username: string, password: string): void {
    const user: any = this.users.find((account: any) => account.username === username && account.password === password);
    if (user !== undefined) {
      this.user.next(user);
    }
  }

  public signout(): void {
    this.user.next(null);
  }
}
