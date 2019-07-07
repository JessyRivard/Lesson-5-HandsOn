webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slideOpts = {
            effect: 'slide'
        };
    }
    HomePage.prototype.goTo = function (slide, index) {
        this.slides.slideTo(index, 2000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/jessyrivard/Bethel Tech/MyIonicApps/PageTurner/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar> <ion-title (click)="goTo(slides, 0)"> Lorem Ipsum Dolor </ion-title> </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides pager="false" #slides>\n    <ion-slide (click)="goTo(slides, 1)">\n      <h1 class="title">Lorem Ipsum Dolor</h1>\n      <img\n        src="http://lorempixel.com/output/fashion-h-c-300-600-8.jpg"\n        alt="cover"\n      />\n    </ion-slide>\n    <ion-slide>\n      <h1>Table of Contents</h1>\n      <hr />\n      <ul class="toc">\n        <li (click)="goTo(slides, 2)">Chapter 1</li>\n        <br />\n        <li (click)="goTo(slides, 6)">Chapter 2</li>\n        <br />\n        <li (click)="goTo(slides, 12)">Chapter 3</li>\n        <br />\n        <li (click)="goTo(slides, 16)">Chapter 4</li>\n      </ul>\n    </ion-slide>\n    <ion-slide>\n      <h1>Chapter 1</h1>\n      <hr />\n      <p class="bodytext">\n        Fusce congue, arcu eget sagittis malesuada,\n        neque lectus vestibulum felis, sit amet mollis leo urna commodo tortor.\n        Vivamus interdum, lectus eu pharetra lacinia, sem nisl pretium lectus,\n        vel congue ligula sem aliquet nibh. Integer sit amet cursus risus, vitae\n        ornare lorem. In efficitur vitae nibh eu volutpat. Donec bibendum tempor\n        est vel semper.\n      </p>\n      <p class="pagenumber">1</p>\n    </ion-slide>\n    <ion-slide>\n      <p class="bodytext">\n        Etiam dictum leo sapien, a aliquam erat finibus ut. Duis in pulvinar felis.\n        Vivamus tempor feugiat gravida. Ut\n        sollicitudin varius finibus.\n      </p>\n      <p class="bodytext">\n        In justo enim, rhoncus sed enim venenatis, malesuada pulvinar dui. Sed\n        eu sem ligula. Phasellus fringilla sem massa, quis gravida libero\n        facilisis ut. Orci varius natoque penatibus et magnis dis parturient\n        montes, nascetur ridiculus mus.\n      </p>\n      <p class="pagenumber">2</p>\n    </ion-slide>\n    <ion-slide>\n      <p class="bodytext">  \n        Vivamus vitae ligula quam. Nullam gravida, est sed\n        bibendum accumsan, neque nulla porttitor sem, at interdum sem sem id\n        erat. Nullam eget turpis arcu. Sed vel orci non elit volutpat tincidunt\n        eu non ex. Fusce sed commodo felis, tempor consectetur est. Duis\n        hendrerit nibh libero, non sollicitudin lacus porttitor id. Mauris nunc\n        metus, iaculis non interdum eget, dignissim pellentesque lorem.\n        Curabitur vitae nunc tortor.\n      </p>\n      <p class="pagenumber">3</p>\n    </ion-slide>\n    <ion-slide>\n      <img src="http://lorempixel.com/output/nightlife-q-g-300-150-5.jpg" />\n      <p class="bodytext">\n        Sed venenatis rhoncus libero, at mattis sem rhoncus ut. Pellentesque\n        habitant morbi tristique senectus et netus et malesuada fames ac turpis\n        egestas. Vestibulum eu rhoncus orci. Cras dapibus ornare mi, non mollis\n        libero varius id.\n      </p>\n      <p class="pagenumber">4</p>\n    </ion-slide>\n    <ion-slide>\n      <h1>Chapter 2</h1>\n      <hr />\n      <p class="bodytext">\n        Etiam varius at arcu eget varius. Aliquam ut dictum diam, nec ultrices\n        mauris. Pellentesque urna nisl, tincidunt vel ex at, lacinia fringilla\n        ipsum. Suspendisse potenti. Sed vitae dapibus neque. Aenean congue\n        sapien a aliquam consectetur. Pellentesque ac quam a velit placerat\n        hendrerit sed quis ipsum.\n      </p>\n      <p class="pagenumber">5</p>\n    </ion-slide>\n    <ion-slide>\n      <p class="bodytext">\n        Cras sit amet accumsan metus, sed dignissim lorem. Etiam vestibulum, velit ut\n        tincidunt tristique, justo enim ornare ipsum, id elementum mi enim id\n        dolor. Donec ornare sagittis enim id pulvinar. Nam a nulla ex. Phasellus\n        ultricies, libero a laoreet pellentesque, orci augue mattis lectus, sit\n        amet molestie diam nisi eu nulla. Mauris maximus scelerisque tempus. In\n        euismod arcu nec urna venenatis feugiat.\n      </p>\n      <p class="pagenumber">6</p>\n    </ion-slide>\n    <ion-slide>\n      <p class="bodytext">\n        Vivamus congue risus a orci feugiat tincidunt.\n        Nulla sed est lorem. Vivamus ac libero sit amet libero luctus lobortis\n        quis eget felis. Class aptent taciti sociosqu ad litora torquent per\n        conubia nostra, per inceptos himenaeos. Aenean dapibus turpis vel\n        feugiat dictum. Praesent ex mi, aliquet vitae sem id, feugiat tincidunt\n        urna. Sed leo metus, consectetur ut tellus vitae, accumsan rutrum massa.\n      </p>\n      <p class="pagenumber">7</p>\n    </ion-slide>\n    <ion-slide>\n      <p class="bodytext">\n        Aenean pellentesque, ex cursus scelerisque luctus, mi libero\n        commodo enim, nec mattis leo sem id ligula. Etiam sit amet purus\n        posuere, cursus quam ut, hendrerit velit. Suspendisse sed congue lacus.\n      </p>\n      <p class="bodytext">\n        Pulvinar et quam eget, rhoncus egestas enim. Quisque in eros\n        libero. Aenean venenatis, nulla in viverra placerat, lacus mauris\n        accumsan diam, eget laoreet elit quam sit amet massa.\n      </p>\n      <p class="pagenumber">8</p>\n    </ion-slide>\n    <ion-slide>\n      <p class="bodytext">\n        Duis tincidunt aliquam lacinia. Nulla id eros est. Sed a arcu\n        pretium, ullamcorper nisi lacinia, egestas leo. Pellentesque condimentum\n        erat vitae dapibus dictum. Mauris efficitur tellus nisl, vel dapibus\n        turpis suscipit in.\n      </p>\n      <img src="http://lorempixel.com/output/city-q-g-300-150-4.jpg" />\n      <p class="pagenumber">9</p>\n    </ion-slide>\n    <ion-slide>\n      <p class="bodytext">\n        Etiam scelerisque mollis mauris, gravida elementum leo pharetra non. Ut\n        consectetur lacus nisi, eget dictum arcu euismod id. Suspendisse nec\n        aliquet diam. Phasellus sodales sit amet massa iaculis consectetur.\n        Fusce sit amet sodales urna. Vivamus et dui viverra, dignissim lectus a,\n        eleifend nisi. Mauris placerat elit sed fringilla imperdiet. Nullam\n        congue iaculis libero, vel consequat tellus hendrerit nec.\n      </p>\n      <p class="pagenumber">10</p>\n    </ion-slide>\n    <ion-slide>\n      <h1>Chapter 3</h1>\n      <hr />\n      <p class="bodytext">\n        Integer eu odio fermentum, auctor ipsum ac, semper neque. Quisque\n        venenatis nulla magna, efficitur lobortis ante cursus non. Ut congue\n        felis quis pretium pellentesque. Morbi egestas quis quam in mollis.\n        Proin euismod\n      </p>\n      <p class="pagenumber">11</p>\n    </ion-slide>\n    <ion-slide>\n      <p class="bodytext">\n        Proin sed tempus diam, tempor consequat enim.\n      </p>\n      <img src="http://lorempixel.com/output/city-q-g-300-150-8.jpg" />\n      <p class="bodytext">\n        Donec eget condimentum tortor, in viverra sapien. Aliquam efficitur ut\n        elit ac egestas. Vivamus mattis sem id ex dignissim euismod.\n      </p>\n      <p class="pagenumber">12</p>\n    </ion-slide>\n    <ion-slide>\n      <p class="bodytext">\n        Nulla bibendum suscipit dolor condimentum interdum.\n        Nulla urna massa, tincidunt ut risus id, interdum interdum turpis. Proin\n        diam libero, pulvinar quis turpis quis, pretium convallis nibh.\n        Pellentesque mauris orci, vehicula eget urna at, facilisis semper ante.\n        Nulla facilisi. Etiam pretium magna dolor, vitae molestie diam eleifend\n        vitae. Etiam pulvinar ex nec nulla pretium malesuada sit amet in urna.\n      </p>\n      <p class="pagenumber">13</p>\n    </ion-slide>\n    <ion-slide>\n      <p class="bodytext">\n        Suspendisse facilisis quam ut nunc egestas, eu finibus\n        sem semper. Vestibulum quam elit, dictum vel malesuada quis, consequat\n        vitae arcu. Duis non diam eget nisi aliquet ullamcorper quis non ante.\n        Mauris viverra iaculis risus quis posuere. Pellentesque id tempor mi.\n        Nam fermentum, est in finibus ultricies, nisi nibh pharetra odio, eget\n        iaculis nisl quam ut dolor. Vestibulum a eros neque.\n      </p>\n      <p class="pagenumber">14</p>\n    </ion-slide>\n    <ion-slide>\n      <h1>Chapter 4</h1>\n      <hr />\n      <img src="http://lorempixel.com/output/nature-q-g-300-150-8.jpg" />\n      <p class="bodytext">\n        Nunc porttitor tellus convallis massa ornare, condimentum\n        euismod mauris fermentum. Integer elementum nisi quis tortor rhoncus,\n        viverra\n      </p>\n      <p class="pagenumber">15</p>\n    </ion-slide>\n    <ion-slide>\n      <p class="bodytext">\n        Sed turpis dolor, accumsan euismod iaculis at, interdum eget\n        libero. Mauris id ipsum quis dolor elementum hendrerit. Donec feugiat\n        velit eu consequat aliquet. Integer semper, magna eget ornare sagittis,\n        massa dolor lacinia lectus, ut consequat leo urna ac metus. Pellentesque\n        ultrices condimentum lectus sed aliquet.\n      </p>\n      <p class="bodytext">\n        Proin sed odio nec sapien convallis facilisis at at neque.\n      </p>\n      <p class="pagenumber">16</p>\n    </ion-slide>\n    <ion-slide>\n      <p class="bodytext">\n        mi maximus metus, vestibulum congue nisl justo laoreet lectus. Donec\n        vitae pulvinar ligula, vel pretium ex. Mauris at purus leo. Ut ornare\n        elit efficitur nibh euismod, quis dictum tortor tempor. Suspendisse\n        metus mauris, pellentesque ut nibh id, congue tincidunt risus. Mauris\n        tempus iaculis nulla, id commodo dui gravida et.\n      </p>\n      <p class="pagenumber">17</p>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/jessyrivard/Bethel Tech/MyIonicApps/PageTurner/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jessyrivard/Bethel Tech/MyIonicApps/PageTurner/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/jessyrivard/Bethel Tech/MyIonicApps/PageTurner/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map