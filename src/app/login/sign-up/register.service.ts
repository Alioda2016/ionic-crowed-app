import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { User } from '../search-place/model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  usersListRef: AngularFireList<any>;
  usersRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { 
    this.usersListRef = db.list('/users');
  }

  public createUser(user: any) {
    return this.usersListRef.push({
      first_name: user.firstName || null,
      last_name: user.lastName || null,
      phone_number: user.phoneNumber || null,
      password: user.password || null,
      username: user.username || null
    })
  }
}
