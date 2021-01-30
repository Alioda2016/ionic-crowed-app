import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(private afAuth: AngularFireAuth, private alert :AlertController, private router: Router) { }

  ngOnInit() {
  }

  async signUp(form){
    if(form.value.password !== form.value.confirmPassword){
      this.showAlert("Error !", "Passwords don't match")
    }
    console.log(form.value);
    try {
      let email = form.value.username + '@crowed.com';
      let password = form.value.password;
      const res = await this.afAuth.createUserWithEmailAndPassword(email , password);
      this.showAlert("Success!", "Welcome aboard");
      this.router.navigate(['/login/sign-in']);
      console.log(res);
      
    }catch (error) {
      console.dir(error);
      this.showAlert("Error !", error.message);
    }
    
  }

  async showAlert(header: string, message: string){
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header,
      message,
      buttons: ['Ok']
    });
    await alert.present();
  }
}
