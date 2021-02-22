import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from '../search-place/model';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  user : any = {};
  constructor(private afAuth: AngularFireAuth, 
              private alert :AlertController, 
              private router: Router,
              private registerService: RegisterService) { }

  ngOnInit() {
  }

  async signUp(form){
    if(form.value.password !== form.value.confirmPassword){
      this.showAlert("Error !", "Passwords don't match")
    }
    try {
      let email = form.value.username + '@crowed.com';
      let password = form.value.password;
      this.user = form.value;
      console.log(this.user);
      
      const res = await this.afAuth.createUserWithEmailAndPassword(email , password);
      this.registerService.createUser(this.user).then(res => {
        console.log(res);
        form.reset();
        
      });
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
