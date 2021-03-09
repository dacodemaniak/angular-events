import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

const materials: any[] = [
  MatToolbarModule,
  MatButtonToggleModule
];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ...materials
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ...materials
  ]
})
export class UserInterfaceModule { }
