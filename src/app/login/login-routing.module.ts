import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../home/auth-guard.service';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
    children: [
      {
        path: 'sign-in',
        children: [
          {
            path: '',
            loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
          }
        ]
      },
      {
        path: 'sign-up',
        children: [
          {
            path: '',
            loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'search-place',
    loadChildren: () => import('./search-place/search-place.module').then( m => m.SearchPlacePageModule),
     canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
