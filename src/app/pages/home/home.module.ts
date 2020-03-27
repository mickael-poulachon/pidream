import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {CarrouselComponent} from '../../components/carrousel/carrousel.component';
import {MenuletterComponent} from '../../components/menuletter/menuletter.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MenutopComponent} from '../../components/menutop/menutop.component';

@NgModule({
  declarations: [
    HomeComponent,
    CarrouselComponent,
    MenuletterComponent,
    MenutopComponent
  ],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatToolbarModule
  ]
})
export class HomeModule {
}
