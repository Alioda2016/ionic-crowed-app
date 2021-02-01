import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'src/app/home/auth-guard.service';

import { SearchPlacePage } from './search-place.page';

const routes: Routes = [
  {
    path: '',
    component: SearchPlacePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPlacePageRoutingModule {}
