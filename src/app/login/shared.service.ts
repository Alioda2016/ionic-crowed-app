import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { CrowedInfo } from './search-place/model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  crowedPercentageListRef: AngularFireList<any>;
  crowedPercentageRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

   // Create
   createCrowedPercentage(apt: CrowedInfo) {
    return this.crowedPercentageListRef.push({
      name: apt.name,
      crowedPercentage: apt.crowedPercentage,
    })
  }

  // Get Single
  getBooking(id: string) {
    this.crowedPercentageRef = this.db.object('/crowedPercentage/' + id);
    return this.crowedPercentageRef;
  }

  // Get List
  getBookingList() {
    this.crowedPercentageListRef = this.db.list('/crowedPercentage');
    return this.crowedPercentageListRef;
  }

  // Update
  updateBooking(id, apt: CrowedInfo) {
    return this.crowedPercentageRef.update({
      name: apt.name,
      crowedPercentage: apt.crowedPercentage,
    })
  }

  // Delete
  deleteBooking(id: string) {
    this.crowedPercentageRef = this.db.object('/crowedPercentage/' + id);
    this.crowedPercentageRef.remove();
  }
}
