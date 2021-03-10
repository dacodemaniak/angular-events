import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { LocalizationService } from 'src/app/shared/services/localization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public languages: string[];

  constructor(
    private userService: UserService,
    private router: Router,
    private localizationService: LocalizationService
  ) { }

  ngOnInit(): void {
    this.languages = ['fr', 'en'];
  }

  public signin(): void {
    if (this.userService.user.getValue() === null) {
      this.userService.signin('jla', 'toto');
    } else {
      this.userService.signout();
      this.router.navigate(['/', 'events']);
    }

  }

  public changeLocalization(): void {
    const newLanguage: string = this.localizationService.langue === 'fr' ? 'en' : 'fr';
    this.localizationService.langue = newLanguage;
  }
}
