import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SharedService } from '../shared.service';
import { CrowedInfo } from './model';


declare var google: any;

@Component({
  selector: 'app-search-place',
  templateUrl: './search-place.page.html',
  styleUrls: ['./search-place.page.scss'],
})

export class SearchPlacePage implements OnInit{

  map: any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  infoWindows: any = [];
 data: any = {name: 'Kim Coffee', crowdPercentage: 70}
  markers: any = [
    {
        title: "kim's coffee",
        latitude: "21.481995210456603",
        longitude: "39.2382450551564"
    }
  ];

  constructor(private router: Router, 
              private alert: AlertController,
              private sharedService: SharedService) { }

  ngOnInit(){
    this.sharedService.getCrowedPercentageList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  logOut(){ 
    this.ConfirmLogOutAlert("Confirm", "You'r about to logout");
  }

  ionViewDidEnter() {
    this.showMap();
  }

  addMarkersToMap(markers) {
    for (let marker of markers) {
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude
      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  addInfoWindowToMarker(marker) {
    let infoWindowContent = '<div id="content">' +
                              '<h2 id="firstHeading" class"firstHeading">' + marker.title + '</h2>' +
                              '<p>Latitude: ' + marker.latitude + '</p>' +
                              '<p>Longitude: ' + marker.longitude + '</p>' +
                            '</div>';

    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });

    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
    });
    this.infoWindows.push(infoWindow);
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
      zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
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

  navigate(){
    console.log('navigate button clicked!');
          // code to navigate using google maps app
     window.open('https://www.google.com/maps/dir/?api=1&destination=' 
            + this.markers[0].latitude 
            + ',' 
            + this.markers[0].longitude
            );
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
          handler: () =>{
            console.log(document.getElementsByName("crowdPercentage"));
            
          }
        }
      ]
    });
    await alert.present();
  }

}
