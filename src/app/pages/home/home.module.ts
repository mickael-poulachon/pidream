import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {CarrouselComponent} from '../../components/carrousel/carrousel.component';
import {MenuletterComponent} from '../../components/menuletter/menuletter.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    HomeComponent,
    CarrouselComponent,
    MenuletterComponent],
  imports: [
    CommonModule,
    MatButtonToggleModule
  ]
})
export class HomeModule {
}
