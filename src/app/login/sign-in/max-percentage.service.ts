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
       max_percentage: value
     }) 
    }

   public getMaxPercentage(username){
      this.maxPercentageRef = this.db.object('/max_percentage/' + username);
      return this.maxPercentageRef;
    }

    getUsername(){
      return this.username;
    }

    setUsername(username){
      this.username = username;
    }
}
