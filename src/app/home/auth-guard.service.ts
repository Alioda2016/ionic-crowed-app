import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

   
   authInfo =  {
    authenticated: true
  };

  constructor(private router: Router) { }

  setAuthInfo(b: boolean){
    this.authInfo.authenticated = b;
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(route);

    if(!this.authInfo.authenticated){
      this.router.navigate(["home"]);
      return false;
    }
    console.log(this.authInfo.authenticated);
    
    return true;
  }
}
