(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{gC6i:function(e,t,n){"use strict";n.r(t),n.d(t,"SearchPlacePageModule",(function(){return f}));var o=n("ofXK"),a=n("3Pt+"),i=n("TEn/"),s=n("tyNb"),r=n("mrSG"),c=n("fXoL"),l=n("sSZD");let g=(()=>{class e{constructor(e){this.db=e,this.crowedPercentageListRef=e.list("/crowdInformation")}createCrowedPercentage(e){return this.crowedPercentageListRef.push({name:e.name,crowedPercentage:e.crowdPercentage})}getCrowedPercentage(e){return this.crowedPercentageRef=this.db.object("/crowdInformation/"+e),this.crowedPercentageRef}getCrowedPercentageList(){return this.crowedPercentageListRef=this.db.list("/crowdInformation"),this.crowedPercentageListRef}updateCrowedPercentage(e,t){return this.crowedPercentageRef.update({name:t.name,crowedPercentage:t.crowdPercentage})}deleteCrowedPercentage(e){this.crowedPercentageRef=this.db.object("/crowdInformation/"+e),this.crowedPercentageRef.remove()}}return e.\u0275fac=function(t){return new(t||e)(c.Pb(l.a))},e.\u0275prov=c.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var d=n("5Px9");const h=["map"];function b(e,t){if(1&e){const e=c.Mb();c.Lb(0,"ion-item",15),c.Tb("click",(function(){c.bc(e);const n=t.$implicit;return c.Vb().showPlace(n.name)})),c.Lb(1,"ion-label"),c.Lb(2,"h2"),c.fc(3),c.Kb(),c.Kb(),c.Kb()}if(2&e){const e=t.$implicit;c.yb(3),c.gc(" ",e.name," ")}}const u=[{path:"",component:(()=>{class e{constructor(e,t,n,o,a){this.router=e,this.alert=t,this.sharedService=n,this.maxPercentageService=o,this.db=a,this.infoWindows=[],this.searchedPlaces=[],this.showTabs=!1,this.data={name:"Kim Coffee",crowdPercentage:70},this.user={},this.markers=[{title:"kim's coffee",latitude:"21.481995210456603",longitude:"39.2382450551564"}]}ngOnInit(){this.sharedService.getCrowedPercentageList().valueChanges().subscribe(e=>{console.log("res: ",e);let t=e[0].name,n=e[0].crowedPercentage;console.log("name",t),this.username=this.maxPercentageService.getUsername(),console.log("usename",this.username),this.maxPercentageService.getMaxPercentage(this.username).valueChanges().subscribe(e=>{var t;for(t in console.log("resss",e),e)console.log("key: ",t),t===this.username?(this.maxPercentage=e[t].max_percentage,console.log("max",this.maxPercentage)):"max_percentage"==t&&(this.maxPercentage=e.max_percentage,console.log("max",this.maxPercentage))}),n>=this.maxPercentage&&this.showAlert("Notification","crowd percentage in "+t+" now is: "+n)})}logOut(){this.ConfirmLogOutAlert("Confirm","You'r about to logout")}search(e){var t=e.target.value.toLowerCase();t.length>0?this.db.database.ref("crowdInformation").orderByChild("name").startAt(t).endAt(t+"\uf8ff").once("value",e=>{this.searchedPlaces=[],e.forEach(e=>{this.searchedPlaces.push(e.val()),console.log(this.searchedPlaces)})}):(this.searchedPlaces=[],this.showMap(),this.showTabs=!this.showTabs)}showPlace(e){console.log(e);const t=new google.maps.LatLng(21.481995210456603,39.2382450551564);this.map=new google.maps.Map(this.mapRef.nativeElement,{center:t,zoom:20,disableDefaultUI:!0}),this.addMarkersToMap(this.markers),this.showTabs=!this.showTabs}ionViewDidEnter(){this.showMap()}addMarkersToMap(e){for(let t of e){let e=new google.maps.LatLng(t.latitude,t.longitude),n=new google.maps.Marker({position:e,title:t.title,latitude:t.latitude,longitude:t.longitude});n.setMap(this.map),this.addInfoWindowToMarker(n)}}addInfoWindowToMarker(e){let t=new google.maps.InfoWindow({content:'<div id="content"><h2 id="firstHeading" class"firstHeading">'+e.title+"</h2><p>Latitude: "+e.latitude+"</p><p>Longitude: "+e.longitude+"</p></div>"});e.addListener("click",()=>{this.closeAllInfoWindows(),t.open(this.map,e)}),this.infoWindows.push(t)}closeAllInfoWindows(){for(let e of this.infoWindows)e.close()}showMap(){const e=new google.maps.LatLng(21.481995210456603,39.2382450551564);this.map=new google.maps.Map(this.mapRef.nativeElement,{center:e,zoom:12,disableDefaultUI:!0})}ConfirmLogOutAlert(e,t){return Object(r.a)(this,void 0,void 0,(function*(){const n=yield this.alert.create({cssClass:"my-custom-class",header:e,message:t,buttons:[{text:"OK",handler:()=>{this.router.navigate(["home"])},cssClass:"alertButton"},{text:"Cancel"}]});yield n.present()}))}navigate(){console.log("navigate button clicked!"),window.open("https://www.google.com/maps/dir/?api=1&destination="+this.markers[0].latitude+","+this.markers[0].longitude)}setPercentage(){return Object(r.a)(this,void 0,void 0,(function*(){const e=yield this.alert.create({cssClass:"my-custom-class",header:"Please set maximum crowdedness percentage",inputs:[{name:"crowdPercentage",type:"number",placeholder:"percentage",cssClass:"alertInput"}],buttons:[{text:"Submit",handler:e=>{this.username=this.maxPercentageService.getUsername(),console.log(e),this.username&&this.maxPercentageService.addMaxPercentage(this.username,e.crowdPercentage).then(e=>{console.log(e)},e=>{console.log(e)})}}]});yield e.present()}))}showAlert(e,t){return Object(r.a)(this,void 0,void 0,(function*(){const n=yield this.alert.create({cssClass:"my-custom-class",header:e,message:t,buttons:["Ok"]});yield n.present()}))}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(s.g),c.Ib(i.a),c.Ib(g),c.Ib(d.a),c.Ib(l.a))},e.\u0275cmp=c.Cb({type:e,selectors:[["app-search-place"]],viewQuery:function(e,t){var n;1&e&&c.hc(h,!0,c.l),2&e&&c.Zb(n=c.Ub())&&(t.mapRef=n.first)},decls:25,vars:4,consts:[[3,"translucent"],["slot","start"],["animated","","placeholder","Search for place...","debounce","500",3,"ionChange"],["detail","","lines","full",3,"click",4,"ngFor","ngForOf"],["slot","end","size","small",3,"click"],["name","log-out-outline","size","small"],[3,"fullscreen"],["id","map"],["map",""],[3,"hidden"],["slot","bottom",1,"tabs"],["name","play-forward","size","small"],[3,"click"],["name","navigate","size","small"],["name","people","size","small"],["detail","","lines","full",3,"click"]],template:function(e,t){1&e&&(c.Lb(0,"ion-header",0),c.Lb(1,"ion-toolbar"),c.Lb(2,"ion-buttons",1),c.Jb(3,"ion-menu-button"),c.Kb(),c.Lb(4,"ion-searchbar",2),c.Tb("ionChange",(function(e){return t.search(e)})),c.Kb(),c.ec(5,b,4,1,"ion-item",3),c.Lb(6,"ion-button",4),c.Tb("click",(function(){return t.logOut()})),c.Jb(7,"ion-icon",5),c.Kb(),c.Kb(),c.Kb(),c.Lb(8,"ion-content",6),c.Jb(9,"div",7,8),c.Kb(),c.Lb(11,"ion-tabs",9),c.Lb(12,"ion-tab-bar",10),c.Lb(13,"ion-tab-button"),c.Jb(14,"ion-icon",11),c.Lb(15,"Strong"),c.fc(16,"Direction"),c.Kb(),c.Kb(),c.Lb(17,"ion-tab-button",12),c.Tb("click",(function(){return t.navigate()})),c.Jb(18,"ion-icon",13),c.Lb(19,"Strong"),c.fc(20,"Navigation"),c.Kb(),c.Kb(),c.Lb(21,"ion-tab-button",12),c.Tb("click",(function(){return t.setPercentage()})),c.Jb(22,"ion-icon",14),c.Lb(23,"Strong"),c.fc(24,"Percentage"),c.Kb(),c.Kb(),c.Kb(),c.Kb()),2&e&&(c.Yb("translucent",!1),c.yb(5),c.Yb("ngForOf",t.searchedPlaces),c.yb(3),c.Yb("fullscreen",!0),c.yb(3),c.Yb("hidden",!t.showTabs))},directives:[i.h,i.u,i.d,i.n,i.q,i.z,o.i,i.c,i.i,i.f,i.t,i.r,i.s,i.k,i.m],styles:["ion-toolbar[_ngcontent-%COMP%]{--background:#e66f51;margin-left:0}ion-button[_ngcontent-%COMP%]{margin-top:14px;--background:#e9c36a}.my-custom-class[_ngcontent-%COMP%]{--background:#63254e}ion-icon[_ngcontent-%COMP%]{color:#000}ion-searchbar[_ngcontent-%COMP%]{margin-left:0;margin-right:0;margin-top:10px}ion-item[_ngcontent-%COMP%], ion-searchbar[_ngcontent-%COMP%]{--background:#e9c36a;color:#000}ion-item[_ngcontent-%COMP%]{margin-right:10}#map[_ngcontent-%COMP%]{height:100%}#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:translucent}Strong[_ngcontent-%COMP%]{font-size:small;margin-bottom:auto}.tabs[_ngcontent-%COMP%], Strong[_ngcontent-%COMP%]{color:#941e30}.tabs[_ngcontent-%COMP%]{--background:#e66f51}"]}),e})()}];let m=(()=>{class e{}return e.\u0275mod=c.Gb({type:e}),e.\u0275inj=c.Fb({factory:function(t){return new(t||e)},imports:[[s.i.forChild(u)],s.i]}),e})(),f=(()=>{class e{}return e.\u0275mod=c.Gb({type:e}),e.\u0275inj=c.Fb({factory:function(t){return new(t||e)},imports:[[o.c,a.a,i.v,m]]}),e})()}}]);