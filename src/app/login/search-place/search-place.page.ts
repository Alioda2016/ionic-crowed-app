import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, PopoverController, ToastController } from '@ionic/angular';
import { SharedService } from '../shared.service';
import { MaxPercentageService } from '../sign-in/max-percentage.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';

declare var google: any;

@Component({
  selector: 'app-search-place',
  templateUrl: './search-place.page.html',
  styleUrls: ['./search-place.page.scss'],
})

export class SearchPlacePage implements OnInit{

  map: any;
  maxPercentage: any ;
  maxPercentageListRef: AngularFireList<any>;
  maxPercentageRef: AngularFireObject<any>;
  username: any ;
  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  // @ViewChild('mapRef', {read: ElementRef, static: false}) mapRef1: ElementRef;
  circles = {};
  status: boolean =false;
  infoWindows: any = [];
  searchedPlaces = [];
  targetPlace:any = {name: 'coffee', crowedPercentage: 30};
  address: string;
  showTabs = false;
  data: any = {name: 'Kim Coffee', crowdPercentage: 70}
  user: any = {};
  markers: any = [
    {
        title: "kim's coffee",
        latitude: 21.481995210456603,
        longitude: 39.2382450551564
    }
  ];

  constructor(private router: Router, 
              private alert: AlertController,
              private sharedService: SharedService,
              private maxPercentageService: MaxPercentageService,
              private db: AngularFireDatabase,
              private geolocation: Geolocation,
              private nativeGeocoder: NativeGeocoder,
              public navCtrl: NavController,
              public toastController: ToastController,
              public popoverController: PopoverController
              
              ) { 
               // this.maxPercentageListRef = db.list('/crowdInformation');
              }

  ngOnInit(){

    this.sharedService.getCrowedPercentageList().valueChanges().subscribe((res: any) => {
      console.log("res: ", res);
      
      let name = res[0].name; // restaurent name
      let per = res[0].crowedPercentage;
      console.log("name", name);
      

      this.username = this.maxPercentageService.getUsername();
      console.log("usename", this.username);
      
      this.maxPercentageService.getMaxPercentage(this.username).valueChanges().subscribe(resss =>{
        var key;
        console.log("resss", resss);
        for(key in resss){
            console.log("key: ", key);
            
            if(key === this.username){
              this.maxPercentage = resss[key].max_percentage; 
              console.log("max", this.maxPercentage);
            } else if(key == 'max_percentage')  {
              this.maxPercentage = resss.max_percentage; 
              console.log("max", this.maxPercentage);
            }     
        }
      });
      
       
    if(per >= this.maxPercentage){
      this.showAlert("Notification", "crowd percentage in " + name + " now is: " +  per);
    }
    })
  }

  logOut(){ 
    this.ConfirmLogOutAlert("Confirm", "You'r about to logout");
  }


  search(evt){
    var key: string = evt.target.value;
    var lowerCaseKey = key.toLowerCase(); 
    if (lowerCaseKey.length > 0) {
          this.db.database.ref("crowdInformation").orderByChild("name").startAt(lowerCaseKey).endAt(lowerCaseKey + "\uf8ff").once("value", snapshot => {
          this.searchedPlaces = [];
          if(!snapshot.exists()) { this.status = true;}
          snapshot.forEach(childSnap => {
            this.searchedPlaces.push(childSnap.val());            
          });
        });
    }
    else {
      this.searchedPlaces = [];
      this.showMap();
      this.showTabs = false;
      this.status = false;
    }   
  }

  showPlace(placeName){
    console.log(placeName);
    const location = new google.maps.LatLng(21.481995210456603, 39.2382450551564);
    
    const options = {
      center: location,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: false
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);

    this.sharedService.getCrowedPercentageList().valueChanges().subscribe((res: any) => {
      console.log("res: ", res);
      let targets:any;
      targets = res;
      targets.forEach(elem=>{
        if(elem.name == placeName){
          this.targetPlace = elem;
          console.log("target place: ", this.targetPlace);
          // this.getAddressFromCoords(this.markers[0].lattitude, this.markers[0].longitude);
          console.log("address", this.address);
          
        }
      })
      
    });
    
    if(placeName)
    {this.showTabs = true;}
  }

  ionViewDidEnter() {
    this.showMap();
  }

  addMarkersToMap(markers) {
    for (let marker of markers) {
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        map : this.map
      });

      mapMarker.setMap(this.map);
    }
  }

  showMarker(person: any) {
    const marker = this.markers[person.uuid];
    const circle = this.circles[person.uuid];
    if (marker.isVisible()) {
      marker.hideInfoWindow();
      marker.setVisible(false);
      circle.setVisible(false);
    } else {
      marker.showInfoWindow();
      marker.setVisible(true);
      circle.setVisible(true);
    }
    this.map.setAllGesturesEnabled(true);
  }

  closeAllInfoWindows() {
    for(let window of this.infoWindows) {
      window.close();
    }
  }
  
  showMap() {
    const location = new google.maps.LatLng(21.481995210456603, 39.2382450551564);
    
    const options = {
      center: location,
      zoom: 12,
      disableDefaultUI: false
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
   // this.addMarkersToMap(this.markers);
  }

  async ConfirmLogOutAlert(header: string, message: string){
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header,
      message, 
      buttons: [
       {
         text: 'OK',
         handler: () =>{
           this.router.navigate(["home"]);
         },
         cssClass: 'alertButton'
       },
        {
          text: 'Cancel',
        }
      ],
    });
    await alert.present();
  }

  direct(){
    console.log('navigate button clicked!');
          // code to navigate using google maps app
     window.open('https://www.google.com/maps/dir/?api=1&destination=' 
            + this.markers[0].latitude 
            + ',' 
            + this.markers[0].longitude
            );
  }

  navigateTo(){
    this.startNavigating();
  }

  startNavigating(){

    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;

    directionsDisplay.setMap(this.map);
    // directionsDisplay.setPanel(this.mapRef1.nativeElement);

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      directionsService.route({
        origin: {lat: resp.coords.latitude, lng: resp.coords.longitude},
        destination: {lat: this.markers[0].latitude, lng: this.markers[0].longitude},
        travelMode: google.maps.TravelMode['DRIVING']
    }, (res, status) => {

        if(status == google.maps.DirectionsStatus.OK){
            directionsDisplay.setDirections(res);
        } else {
            console.warn(status);
        }

    });
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });

}

  async setPercentage(){
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header : 'Please set maximum crowdedness percentage',
      inputs: [
       {
        name: 'crowdPercentage',
        type: 'number',
        placeholder: 'percentage',
        cssClass: 'alertInput'
       },
      ],
      buttons: [
        {
          text: 'Submit',
          handler: (alertData) =>{
            if (alertData >= 0 && alertData <= 100) {
              this.username = this.maxPercentageService.getUsername();
              console.log(alertData);
              if(this.username)
              this.maxPercentageService.addMaxPercentage(this.username, alertData.crowdPercentage).then((res: any) =>{
                console.log(res);
                this.presentToast("Successfully, Maximum Percentage Added")
              }, error =>{
                console.log(error);
                
              });
            } else {
              this.presentToast('Percentage Must be between 0 and 100');
              return false;
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      cssClass: 'toast-class',
      message: msg,
      duration: 3000,
      position: "middle",
      animated: true,
    });
    toast.present();
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

  getAddressFromCoords(lattitude, longitude) {
    console.log("getAddressFromCoords " + lattitude + " " + longitude);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.address = "";
        let responseAddress = [];
        for (let [key, value] of Object.entries(result[0])) {
          if (value.length > 0)
            responseAddress.push(value);

        }
        responseAddress.reverse();
        for (let value of responseAddress) {
          this.address += value + ", ";
        }
        this.address = this.address.slice(0, -2);
      })
      .catch((error: any) => {
        this.address = "Address Not Available!";
      });

  }

}
