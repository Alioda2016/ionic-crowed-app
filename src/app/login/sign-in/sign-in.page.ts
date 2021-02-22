import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthGuardService } from 'src/app/home/auth-guard.service';
import { MaxPercentageService } from './max-percentage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  constructor(
    private afAuth: AngularFireAuth, 
    private router: Router, 
    private alert: AlertController,
    private agService: AuthGuardService,
    private maxPercentageService: MaxPercentageService) { }

  ngOnInit() {
  }

  async login(form){
    console.log(form.value);
    try {
      let email = form.value.username + '@crowed.com';
      let password = form.value.password;
      const res = await this.afAuth.signInWithEmailAndPassword(email , password);
      this.agService.setAuthInfo(true);
      this.maxPercentageService.setUsername(form.value.username);
      this.router.navigate(['/login/search-place']);
    }catch (error) {
      console.dir(error);
      if(error.code === "auth/user-not-found"){
        this.showAlert("Error !", "User not found")
        
      }else if(error.code === "auth/wrong-password"){
        this.showAlert("Error !", "Wrong Password")
      }
    }
  }

  async showAlert(header: string, message: string){
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header,
      message, 
      buttons: ['Ok'],
    });
    await alert.present();
  }
}
