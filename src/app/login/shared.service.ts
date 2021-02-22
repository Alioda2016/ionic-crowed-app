import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { CrowedInfo } from './search-place/model';

@Injectable({
  providedIn: 'root'

})
export class SharedService {


  crowedPercentageListRef: AngularFireList<any>;
  crowedPercentageRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { 
    this.crowedPercentageListRef = db.list('/crowdInformation');
  }

   // Create
   createCrowedPercentage(apt: CrowedInfo) {
    return this.crowedPercentageListRef.push({
      name: apt.name,
      crowedPercentage: apt.crowdPercentage,
    })
  }

  // Get Single
  getCrowedPercentage(id: string) {
    this.crowedPercentageRef = this.db.object('/crowdInformation/' + id);
    return this.crowedPercentageRef;
  }

  // Get List
  getCrowedPercentageList() {
    this.crowedPercentageListRef = this.db.list('/crowdInformation');
    return this.crowedPercentageListRef;
  }

  // Update
  updateCrowedPercentage(id, apt: CrowedInfo) {
    return this.crowedPercentageRef.update({
      name: apt.name,
      crowedPercentage: apt.crowdPercentage,
    })
  }

  // Delete
  deleteCrowedPercentage(id: string) {
    this.crowedPercentageRef = this.db.object('/crowdInformation/' + id);
    this.crowedPercentageRef.remove();
  }

 
}
