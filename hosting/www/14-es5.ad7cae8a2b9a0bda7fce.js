!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"WZH+":function(n,r,o){"use strict";o.r(r),o.d(r,"SignUpPageModule",(function(){return y}));var i,s,a,u,c=o("ofXK"),l=o("3Pt+"),b=o("TEn/"),d=o("tyNb"),m=o("mrSG"),p=o("fXoL"),f=o("UbJi"),g=o("sSZD"),h=((i=function(){function n(t){e(this,n),this.db=t,this.usersListRef=t.list("/users")}return t(n,[{key:"createUser",value:function(e){return this.usersListRef.push({first_name:e.firstName||null,last_name:e.lastName||null,phone_number:e.phoneNumber||null,password:e.password||null,username:e.username||null})}}]),n}()).\u0275fac=function(e){return new(e||i)(p.Pb(g.a))},i.\u0275prov=p.Eb({token:i,factory:i.\u0275fac,providedIn:"root"}),i),v=[{path:"",component:(s=function(){function n(t,r,o,i){e(this,n),this.afAuth=t,this.alert=r,this.router=o,this.registerService=i,this.user={}}return t(n,[{key:"ngOnInit",value:function(){}},{key:"signUp",value:function(e){return Object(m.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var t,r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.value.password!==e.value.confirmPassword&&this.showAlert("Error !","Passwords don't match"),n.prev=1,t=e.value.username+"@crowed.com",r=e.value.password,this.user=e.value,console.log(this.user),n.next=6,this.afAuth.createUserWithEmailAndPassword(t,r);case 6:o=n.sent,this.registerService.createUser(this.user).then((function(n){console.log(n),e.reset()})),this.showAlert("Success!","Welcome aboard"),this.router.navigate(["/login/sign-in"]),console.log(o),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),console.dir(n.t0),this.showAlert("Error !",n.t0.message);case 13:case"end":return n.stop()}}),n,this,[[1,10]])})))}},{key:"showAlert",value:function(e,n){return Object(m.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alert.create({cssClass:"my-custom-class",header:e,message:n,buttons:["Ok"]});case 2:return r=t.sent,t.next=5,r.present();case 5:case"end":return t.stop()}}),t,this)})))}}]),n}(),s.\u0275fac=function(e){return new(e||s)(p.Ib(f.a),p.Ib(b.a),p.Ib(d.g),p.Ib(h))},s.\u0275cmp=p.Cb({type:s,selectors:[["app-sign-up"]],decls:24,vars:1,consts:[[1,"sign-up"],[3,"ngSubmit"],["form","ngForm"],[1,"grid"],["justify-content-center",""],["align-self-center","","size-md","6","size-lg","5","size-xs","12"],["padding",""],["name","firstName","type","text","placeholder","First Name","ngModel","","required",""],["name","lastName","type","text","placeholder","Last Name","ngModel","","required",""],["name","username","type","text","placeholder","Username","ngModel","","required",""],["name","phoneNumber","type","number","placeholder","Phone Number","ngModel","","required",""],["name","password","type","password","placeholder","Password","ngModel","","required",""],["name","confirmPassword","type","password","placeholder","Confirm Password","ngModel","","required",""],["size","large","type","submit","slot","bottom","expand","block",3,"disabled"]],template:function(e,n){if(1&e){var t=p.Mb();p.Lb(0,"ion-content",0),p.Lb(1,"form",1,2),p.Tb("ngSubmit",(function(){p.bc(t);var e=p.ac(2);return n.signUp(e)})),p.Lb(3,"ion-grid",3),p.Lb(4,"ion-row",4),p.Lb(5,"ion-col",5),p.Jb(6,"ion-item-divider"),p.Lb(7,"div",6),p.Lb(8,"ion-item"),p.Jb(9,"ion-input",7),p.Kb(),p.Lb(10,"ion-item"),p.Jb(11,"ion-input",8),p.Kb(),p.Lb(12,"ion-item"),p.Jb(13,"ion-input",9),p.Kb(),p.Lb(14,"ion-item"),p.Jb(15,"ion-input",10),p.Kb(),p.Lb(16,"ion-item"),p.Jb(17,"ion-input",11),p.Kb(),p.Lb(18,"ion-item"),p.Jb(19,"ion-input",12),p.Kb(),p.Kb(),p.Jb(20,"ion-item-divider"),p.Lb(21,"div",6),p.Lb(22,"ion-button",13),p.fc(23,"Sign Up"),p.Kb(),p.Kb(),p.Kb(),p.Kb(),p.Kb(),p.Kb(),p.Kb()}if(2&e){var r=p.ac(2);p.yb(22),p.Yb("disabled",r.invalid)}},directives:[b.f,l.i,l.e,l.f,b.g,b.p,b.e,b.l,b.k,b.j,b.z,l.d,l.g,l.h,b.x,b.c],styles:[".sign-up[_ngcontent-%COMP%]{--ion-background-color:#63254e}.my-custom-class[_ngcontent-%COMP%]{--background:#63254e}ion-input[_ngcontent-%COMP%]{--background:#e9c36a;color:#000}ion-item-divider[_ngcontent-%COMP%]{--background:#63254e}ion-item[_ngcontent-%COMP%]{--background:#e66f51;margin:auto}ion-button[_ngcontent-%COMP%]{--background:#f3a361;color:#941e30}form[_ngcontent-%COMP%]{margin-top:10%;height:50%}"]}),s)}],w=((u=function n(){e(this,n)}).\u0275mod=p.Gb({type:u}),u.\u0275inj=p.Fb({factory:function(e){return new(e||u)},imports:[[d.i.forChild(v)],d.i]}),u),y=((a=function n(){e(this,n)}).\u0275mod=p.Gb({type:a}),a.\u0275inj=p.Fb({factory:function(e){return new(e||a)},imports:[[c.c,l.a,b.v,w]]}),a)}}])}();