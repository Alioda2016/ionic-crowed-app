import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class MaxPercentageService {

  username: string ='';
  maxPercentageListRef: AngularFireList<any>;
  maxPercentageRef: AngularFireObject<any>;
  
  constructor(private db: AngularFireDatabase) {
    this.maxPercentageListRef = db.list('/max_percentage');
   }

   public addMaxPercentage(username, value){
     return this.maxPercentageListRef.set(username, {
       username: username,
       max_percentage: value
     }) 
    }

    getUsername(){
      return this.username;
    }

    setUsername(username){
      this.username = username;
    }
}
