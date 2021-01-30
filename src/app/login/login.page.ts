import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateBack(){
    this.router.navigate(['home']);
  }

  login(){
    console.log("sign in");
  }

  join(){
  }
}
