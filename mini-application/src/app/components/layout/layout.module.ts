import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'; 
import { FooterComponent } from './footer/footer.component';
import { PrivateHeaderComponent } from './private-header/private-header.component';
import { PrivateMenuComponent } from './private-menu/private-menu.component';
import { PublicHeaderComponent } from './public-header/public-header.component';
import { PublicMenuComponent } from './public-menu/public-menu.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    FooterComponent,
    PrivateHeaderComponent,
    PrivateMenuComponent,
    PublicHeaderComponent,
    PublicMenuComponent,
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    FooterComponent,
    PrivateHeaderComponent,
    PrivateMenuComponent,
    PublicHeaderComponent,
    PublicMenuComponent,
  ]
})
export class LayoutModule { }