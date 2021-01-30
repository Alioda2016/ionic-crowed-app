import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPlacePageRoutingModule } from './search-place-routing.module';

import { SearchPlacePage } from './search-place.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPlacePageRoutingModule
  ],
  declarations: [SearchPlacePage]
})
export class SearchPlacePageModule {}
