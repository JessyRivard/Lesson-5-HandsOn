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
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/jessyrivard/Bethel Tech/MyIonicApps/PageTurner/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar> <ion-title> Lorem Ipsum Dolor </ion-title> </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides pager="false">\n    <ion-slide>\n      <h1 class="title" (click)="slideTo(1)">Lorem Ipsum Dolor</h1>\n      <img\n        src="http://lorempixel.com/output/fashion-h-c-300-600-8.jpg"\n        alt="cover"\n      />\n    </ion-slide>\n    <ion-slide>\n      <h1>Table of Contents</h1>\n      <hr />\n      <ul class="toc">\n        <li (click)="slideTo(2)">Chapter 1</li>\n        <br />\n        <li (click)="slideTo(6)">Chapter 2</li>\n        <br />\n        <li (click)="slideTo(10)">Chapter 3</li>\n        <br />\n        <li (click)="slideTo(14)">Chapter 4</li>\n      </ul>\n    </ion-slide>\n    <ion-slide>\n      <h1>Chapter 1</h1>\n      <hr />\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum\n        luctus, orci vitae vehicula finibus, purus tellus efficitur quam, vel\n        ullamcorper ex quam vitae lectus. Duis pharetra enim non blandit rutrum.\n        Curabitur a placerat neque. Fusce congue, arcu eget sagittis malesuada,\n        neque lectus vestibulum felis, sit amet mollis leo urna commodo tortor.\n        Vivamus interdum, lectus eu pharetra lacinia, sem nisl pretium lectus,\n        vel congue ligula sem aliquet nibh. Integer sit amet cursus risus, vitae\n        ornare lorem. In efficitur vitae nibh eu volutpat. Donec bibendum tempor\n        est vel semper. Interdum et malesuada fames ac ante ipsum primis in\n        faucibus. Vestibulum vestibulum arcu eros, in sodales nunc ornare et. In\n        a augue interdum, ultricies mi vel, euismod dui. Fusce neque dui,\n        sollicitudin laoreet libero sed, imperdiet gravida est. Cras lacinia ac\n        ex nec sollicitudin.\n      </p>\n      <p>\n        Proin enim ipsum, bibendum sit amet tincidunt a, blandit in metus.\n        Maecenas blandit, tellus eget scelerisque maximus, neque odio mattis\n        eros, eget vestibulum sem enim eget sapien. Integer ut malesuada orci,\n        vitae hendrerit nunc. Vivamus nec feugiat magna. In et dignissim\n      </p>\n      <p class="pagenumber">1</p>\n    </ion-slide>\n    <ion-slide>\n      <p>\n        orci. Etiam facilisis tempor dolor sed ornare. Sed consectetur blandit\n        sagittis. Sed molestie fringilla nibh. Vivamus mattis, purus eu maximus\n        mattis, velit justo posuere nulla, a dictum lorem dolor id dui. Aliquam\n        varius sem eu enim ullamcorper ullamcorper.\n      </p>\n      <p>\n        Donec libero ligula, tristique sit amet pellentesque non, tempus at\n        urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam\n        dictum leo sapien, a aliquam erat finibus ut. Duis in pulvinar felis.\n        Vivamus tempor feugiat gravida. Sed sit amet eleifend augue. Ut\n        sollicitudin varius finibus.\n      </p>\n      <p>\n        In justo enim, rhoncus sed enim venenatis, malesuada pulvinar dui. Sed\n        eu sem ligula. Phasellus fringilla sem massa, quis gravida libero\n        facilisis ut. Orci varius natoque penatibus et magnis dis parturient\n        montes, nascetur ridiculus mus. Donec vel diam vitae elit faucibus\n        laoreet a a enim. Morbi vel elit ultricies, efficitur lorem id, egestas\n        turpis. Sed et maximus mi. Sed bibendum tincidunt purus in semper.\n        Pellentesque habitant morbi tristique senectus et netus et malesuada\n        fames ac turpis egestas. Sed nec pulvinar urna, sed vulputate urna. Ut\n        scelerisque hendrerit tempor. Phasellus finibus varius metus quis\n        interdum. Pellentesque habitant morbi tristique senectus et netus et\n        malesuada fames ac turpis egestas.\n      </p>\n      <p class="pagenumber">2</p>\n    </ion-slide>\n    <ion-slide>\n      <p>\n        Phasellus rhoncus diam id nunc facilisis, in pulvinar arcu commodo.\n        Proin quis accumsan nisi. Nullam at laoreet felis. Aliquam eget libero\n        rutrum, mattis magna ac, hendrerit ex. Integer aliquam nec lectus a\n        luctus. Curabitur malesuada convallis nisl id pellentesque. Ut a ligula\n        semper, vestibulum dolor ut, tempus turpis. Maecenas a tempus tortor,\n        vitae elementum mi.\n      </p>\n      <p>\n        Curabitur vitae congue urna, non cursus enim. Donec luctus erat quis\n        ultrices tristique. Vivamus vitae ligula quam. Nullam gravida, est sed\n        bibendum accumsan, neque nulla porttitor sem, at interdum sem sem id\n        erat. Nullam eget turpis arcu. Sed vel orci non elit volutpat tincidunt\n        eu non ex. Fusce sed commodo felis, tempor consectetur est. Duis\n        hendrerit nibh libero, non sollicitudin lacus porttitor id. Mauris nunc\n        metus, iaculis non interdum eget, dignissim pellentesque lorem.\n        Curabitur vitae nunc tortor. Praesent varius purus risus, quis facilisis\n        quam volutpat id. Aliquam id cursus orci. Nam vitae elit tincidunt quam\n        rutrum efficitur eu quis elit.\n      </p>\n      <p>\n        Nullam mattis faucibus facilisis. Cras luctus scelerisque venenatis. Nam\n        eu nisi in magna euismod molestie. Donec et felis nulla. Nunc in elit id\n        felis pellentesque rhoncus. Nulla facilisi. Donec efficitur rutrum felis\n        at egestas. Phasellus elit lacus, viverra in dapibus eget, iaculis in\n        lorem. Curabitur sit amet felis placerat, aliquet nisl molestie,\n        sagittis magna. Pellentesque a dui finibus, facilisis risus dapibus,\n        molestie\n      </p>\n      <p class="pagenumber">3</p>\n    </ion-slide>\n    <ion-slide>\n      <p>\n        enim. Sed tempus ex vitae nisi fermentum, nec efficitur metus\n        condimentum. Maecenas vel massa tincidunt, accumsan elit laoreet,\n        posuere tellus. Pellentesque egestas elementum interdum.\n      </p>\n      <img src="http://lorempixel.com/output/nightlife-q-g-300-150-5.jpg" />\n      <p>\n        Sed venenatis rhoncus libero, at mattis sem rhoncus ut. Pellentesque\n        habitant morbi tristique senectus et netus et malesuada fames ac turpis\n        egestas. Vestibulum eu rhoncus orci. Cras dapibus ornare mi, non mollis\n        libero varius id. Donec urna velit, eleifend et nibh sed, venenatis\n        feugiat tortor. Proin maximus lacus turpis, sed bibendum sem mattis non.\n        Aenean gravida lacinia bibendum. Quisque eu posuere sapien, id ultricies\n        nunc. Suspendisse rhoncus diam eget venenatis pharetra. Donec id commodo\n        turpis.\n      </p>\n      <p class="pagenumber">4</p>\n    </ion-slide>\n    <ion-slide>\n      <h1>Chapter 2</h1>\n      <hr />\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a lectus\n        at nisl bibendum viverra. Integer arcu nulla, pretium eget elit at,\n        laoreet posuere augue. Aenean eget molestie eros. In hac habitasse\n        platea dictumst. Maecenas varius risus urna, sit amet gravida libero\n        vestibulum a. Morbi libero eros, mattis sed scelerisque sed, iaculis id\n        felis. Praesent ut interdum urna.\n      </p>\n      <p>\n        Etiam varius at arcu eget varius. Aliquam ut dictum diam, nec ultrices\n        mauris. Pellentesque urna nisl, tincidunt vel ex at, lacinia fringilla\n        ipsum. Suspendisse potenti. Sed vitae dapibus neque. Aenean congue\n        sapien a aliquam consectetur. Pellentesque ac quam a velit placerat\n        hendrerit sed quis ipsum. Nullam eu justo non justo commodo sagittis.\n        Integer mollis commodo mattis. Integer commodo venenatis ipsum facilisis\n        scelerisque. Ut ac neque quis nulla sagittis tempus condimentum et\n        lorem. In sit amet molestie arcu. Praesent eget volutpat massa. Duis\n        eget\n      </p>\n      <p class="pagenumber">5</p>\n    </ion-slide>\n    <ion-slide>\n      <p>\n        porttitor tellus. Nunc erat nisl, fermentum eget mi ac, mattis congue\n        tellus. Donec accumsan dolor id sapien scelerisque, luctus euismod est\n        luctus.\n      </p>\n      <p>\n        Fusce at auctor felis. Vivamus ut purus a sapien placerat porttitor.\n        Aenean sodales nunc a diam molestie fringilla eu vel turpis. Cras sit\n        amet accumsan metus, sed dignissim lorem. Etiam vestibulum, velit ut\n        tincidunt tristique, justo enim ornare ipsum, id elementum mi enim id\n        dolor. Donec ornare sagittis enim id pulvinar. Nam a nulla ex. Phasellus\n        ultricies, libero a laoreet pellentesque, orci augue mattis lectus, sit\n        amet molestie diam nisi eu nulla. Mauris maximus scelerisque tempus. In\n        euismod arcu nec urna venenatis feugiat. Etiam blandit nulla facilisis\n        volutpat fringilla. Integer accumsan, eros sed suscipit placerat, sem\n        tortor auctor nisi, eu tincidunt ligula diam eget nulla. Integer ac\n        venenatis nisl, vel fermentum turpis. Aliquam nec augue vel massa\n        consectetur elementum. Nam nibh velit, blandit lacinia feugiat in,\n        condimentum at nunc.\n      </p>\n      <p>\n        Proin luctus sit amet elit quis pharetra. Curabitur dignissim, ligula a\n        mollis iaculis, nulla libero lobortis neque, ut\n      </p>\n      <p class="pagenumber">6</p>\n    </ion-slide>\n    <ion-slide>\n      <p>\n        gravida erat velit gravida metus. Morbi condimentum purus vel nulla\n        facilisis commodo. Fusce ullamcorper tortor vitae metus rhoncus, a\n        pretium urna congue. Suspendisse convallis diam sagittis finibus\n        ullamcorper. Nulla facilisi. Duis aliquam massa sapien, et aliquet urna\n        euismod quis. Donec id ligula molestie, commodo diam eu, pretium lorem.\n        Aenean blandit, nunc quis accumsan tempus, nisl lorem molestie urna, nec\n        auctor sem sem id ipsum. Vivamus congue risus a orci feugiat tincidunt.\n        Nulla sed est lorem. Vivamus ac libero sit amet libero luctus lobortis\n        quis eget felis. Class aptent taciti sociosqu ad litora torquent per\n        conubia nostra, per inceptos himenaeos. Aenean dapibus turpis vel\n        feugiat dictum. Praesent ex mi, aliquet vitae sem id, feugiat tincidunt\n        urna. Sed leo metus, consectetur ut tellus vitae, accumsan rutrum massa.\n      </p>\n      <p>\n        Nam quis mauris faucibus, interdum lectus sed, condimentum libero. Donec\n        tristique iaculis mi, at condimentum turpis hendrerit eget. Aenean\n        efficitur arcu ac augue sagittis elementum. Aenean commodo dui vel\n        sapien sodales viverra. Aenean lacinia nisi et bibendum gravida. Morbi\n        ut lacus et leo laoreet pellentesque quis ut est. Donec laoreet rhoncus\n        ligula eu tincidunt. Phasellus malesuada urna nibh, nec semper enim\n        gravida id. Suspendisse vel\n      </p>\n      <p class="pagenumber">7</p>\n    </ion-slide>\n    <ion-slide>\n      <p>\n        eros nunc. Aenean pellentesque, ex cursus scelerisque luctus, mi libero\n        commodo enim, nec mattis leo sem id ligula. Etiam sit amet purus\n        posuere, cursus quam ut, hendrerit velit. Suspendisse sed congue lacus.\n      </p>\n      <p>\n        Pellentesque porttitor consequat est, non gravida diam vulputate ut. Sed\n        ex libero, pulvinar et quam eget, rhoncus egestas enim. Quisque in eros\n        libero. Aenean venenatis, nulla in viverra placerat, lacus mauris\n        accumsan diam, eget laoreet elit quam sit amet massa. Class aptent\n        taciti sociosqu ad litora torquent per conubia nostra, per inceptos\n        himenaeos. Proin nec urna at justo tristique pulvinar eu vitae neque.\n        Nam eleifend pretium quam nec posuere.\n      </p>\n      <p>\n        Donec sed rutrum risus. Maecenas mauris turpis, tincidunt at ante eu,\n        congue tristique velit. Duis pellentesque congue enim id commodo. Donec\n        sapien velit, condimentum non eleifend in, congue quis tortor. Nulla\n        quis finibus quam. In finibus egestas nibh at tristique. Maecenas ligula\n        tellus, dapibus elementum mi vitae, luctus commodo massa. Nulla\n        malesuada nunc id justo condimentum gravida. Phasellus faucibus vitae\n        lorem non mollis. Sed felis\n      </p>\n      <p class="pagenumber">8</p>\n    </ion-slide>\n    <ion-slide>\n      <p>massa, tincidunt vel nibh et, volutpat pretium massa.</p>\n      <p>\n        Aliquam ipsum dolor, bibendum quis dui a, auctor feugiat magna. Praesent\n        tincidunt, purus a pretium faucibus, ipsum nunc dictum ligula, a\n        condimentum nisi odio dictum felis. Nunc vel pulvinar est. Phasellus a\n        laoreet nisl, in tincidunt metus. Mauris neque turpis, semper et nulla\n        a, pretium mattis sem. Praesent pulvinar nisl diam, vel posuere purus\n        suscipit eu. Nam tincidunt ullamcorper venenatis. Donec non efficitur\n        sapien. Duis tincidunt aliquam lacinia. Nulla id eros est. Sed a arcu\n        pretium, ullamcorper nisi lacinia, egestas leo. Pellentesque condimentum\n        erat vitae dapibus dictum. Mauris efficitur tellus nisl, vel dapibus\n        turpis suscipit in. Aliquam consectetur efficitur nunc pretium accumsan.\n        Proin tincidunt efficitur urna, fermentum aliquet lacus dapibus sodales.\n        Fusce mattis imperdiet urna, et accumsan lacus ornare id.\n      </p>\n      <img src="http://lorempixel.com/output/city-q-g-300-150-4.jpg" />\n      <p class="pagenumber">9</p>\n    </ion-slide>\n    <ion-slide>\n      <p>\n        Etiam scelerisque mollis mauris, gravida elementum leo pharetra non. Ut\n        consectetur lacus nisi, eget dictum arcu euismod id. Suspendisse nec\n        aliquet diam. Phasellus sodales sit amet massa iaculis consectetur.\n        Fusce sit amet sodales urna. Vivamus et dui viverra, dignissim lectus a,\n        eleifend nisi. Mauris placerat elit sed fringilla imperdiet. Nullam\n        congue iaculis libero, vel consequat tellus hendrerit nec. Suspendisse\n        facilisis ipsum vel ante ullamcorper maximus feugiat nec urna. Donec\n        quis libero ipsum. Praesent hendrerit convallis sollicitudin. Phasellus\n        posuere id libero id finibus.\n      </p>\n      <p class="pagenumber">10</p>\n    </ion-slide>\n    <ion-slide>\n      <h1>Chapter 3</h1>\n      <hr />\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum\n        nibh eget purus congue mollis. Interdum et malesuada fames ac ante ipsum\n        primis in faucibus. Cras non orci ultricies, suscipit nisi eu, pulvinar\n        felis. Mauris bibendum convallis sagittis. Sed vestibulum sit amet nulla\n        et posuere. Sed fringilla tempor vulputate. Praesent aliquam at eros vel\n        aliquam. Morbi maximus interdum massa, id fermentum ex aliquet non.\n        Donec rutrum tempor lacus. Suspendisse feugiat dolor vel massa malesuada\n        lacinia. Sed turpis tellus, laoreet vitae tempor a, lobortis ac libero.\n        Quisque a justo et arcu hendrerit eleifend. Nulla laoreet urna eget\n        finibus consequat. Donec risus dui, mollis vel suscipit imperdiet,\n        faucibus eu eros. Cras vel posuere sapien.\n      </p>\n      <p>\n        Integer eu odio fermentum, auctor ipsum ac, semper neque. Quisque\n        venenatis nulla magna, efficitur lobortis ante cursus non. Ut congue\n        felis quis pretium pellentesque. Morbi egestas quis quam in mollis.\n        Proin euismod\n      </p>\n      <p class="pagenumber">11</p>\n    </ion-slide>\n    <ion-slide>\n      <p>\n        nunc a ipsum consequat dapibus. Sed volutpat, nulla eu suscipit viverra,\n        erat justo fringilla enim, sed ornare nulla lectus in nibh. Fusce eu mi\n        porta libero cursus rhoncus. Sed tristique ipsum nisl, quis gravida\n        metus sodales a. Quisque sed quam laoreet, tristique enim sed, maximus\n        ligula. Mauris auctor ac massa quis tristique. In ornare dictum leo\n        blandit porta. Vestibulum ullamcorper sed nibh vitae blandit. Proin sed\n        tempus diam, tempor consequat enim.\n      </p>\n      <img src="http://lorempixel.com/output/city-q-g-300-150-8.jpg" />\n      <p>\n        Donec eget condimentum tortor, in viverra sapien. Aliquam efficitur ut\n        elit ac egestas. Vivamus mattis sem id ex dignissim euismod. Curabitur\n        et est convallis, malesuada ante id, tempus enim. Morbi a maximus lorem.\n        Proin ullamcorper, est a sagittis imperdiet, ipsum ante consequat erat,\n        sed sollicitudin odio odio eu enim. Pellentesque tempor nunc non odio\n        congue, eu interdum lectus mattis. Proin sit amet quam molestie,\n        vestibulum nulla vitae, maximus neque. Vivamus vel ultricies lectus.\n        Duis dictum suscipit magna at varius. Class aptent taciti sociosqu ad\n        litora torquent per conubia nostra, per inceptos himenaeos.\n      </p>\n      <p class="pagenumber">12</p>\n    </ion-slide>\n    <ion-slide>\n      <p>\n        Mauris dui ex, ornare ac pellentesque nec, tempus non enim. Vestibulum\n        tincidunt convallis risus, et suscipit purus ultricies quis. Morbi at\n        arcu a mauris molestie elementum. Curabitur fringilla egestas quam, ac\n        pulvinar massa aliquet sed. Etiam nisl dui, iaculis quis sagittis nec,\n        posuere ac felis. Nulla bibendum suscipit dolor condimentum interdum.\n        Nulla urna massa, tincidunt ut risus id, interdum interdum turpis. Proin\n        diam libero, pulvinar quis turpis quis, pretium convallis nibh.\n        Pellentesque mauris orci, vehicula eget urna at, facilisis semper ante.\n        Nulla facilisi. Etiam pretium magna dolor, vitae molestie diam eleifend\n        vitae. Etiam pulvinar ex nec nulla pretium malesuada sit amet in urna.\n      </p>\n      <p>\n        Mauris quis turpis sem. Morbi sodales velit quis velit facilisis congue.\n        Morbi euismod lorem eu maximus blandit. Sed id tellus lacus. Nam eget\n        est nibh. Donec mattis ullamcorper ligula, quis vestibulum nulla\n        vestibulum eget. Praesent hendrerit justo quis facilisis pharetra.\n      </p>\n      <p>\n        Aliquam ultrices mauris ac dictum fringilla. Morbi aliquet efficitur\n        eros quis vestibulum. Nulla eu malesuada arcu,\n      </p>\n      <p class="pagenumber">13</p>\n    </ion-slide>\n    <ion-slide>\n      <p>\n        sed rutrum leo. Etiam porta consectetur ante, dapibus porta nibh\n        fermentum in. Donec ipsum risus, pulvinar id neque at, lobortis\n        vestibulum tellus. Cras commodo ante vitae cursus bibendum. Proin ac\n        sodales nulla. Suspendisse facilisis quam ut nunc egestas, eu finibus\n        sem semper. Vestibulum quam elit, dictum vel malesuada quis, consequat\n        vitae arcu. Duis non diam eget nisi aliquet ullamcorper quis non ante.\n        Mauris viverra iaculis risus quis posuere. Pellentesque id tempor mi.\n        Nunc quis tempus ex, ut accumsan lacus. Nam fermentum, est in finibus\n        ultricies, nisi nibh pharetra odio, eget iaculis nisl quam ut dolor.\n        Vestibulum a eros neque. Nullam malesuada felis quis erat congue\n        rhoncus.\n      </p>\n      <p>\n        Proin vitae libero in ante ultricies sollicitudin. Vivamus posuere\n        cursus ipsum ultrices interdum. Nam egestas sed metus eget bibendum.\n        Donec nec venenatis mauris. Nullam semper massa ut neque rhoncus\n        sodales. Sed a nunc nulla. Phasellus rhoncus sollicitudin metus, a\n        rhoncus urna varius in.\n      </p>\n      <p class="pagenumber">14</p>\n    </ion-slide>\n    <ion-slide>\n      <h1>Chapter 4</h1>\n      <hr />\n      <img src="http://lorempixel.com/output/nature-q-g-300-150-8.jpg" />\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet\n        auctor dui, eget luctus enim. Mauris cursus, sem vel facilisis\n        ultricies, ante urna ullamcorper mi, vel molestie enim tortor sit amet\n        urna. Proin congue magna ullamcorper nisi consequat congue. Curabitur\n        vestibulum quis metus in dignissim. Vivamus sapien lorem, auctor sed\n        urna id, lobortis bibendum lacus. Sed ut lectus eget dolor venenatis\n        eleifend. Nunc porttitor tellus convallis massa ornare, condimentum\n        euismod mauris fermentum. Integer elementum nisi quis tortor rhoncus,\n        viverra\n      </p>\n      <p class="pagenumber">15</p>\n    </ion-slide>\n    <ion-slide>\n      <p>\n        cursus risus vehicula. Pellentesque id augue vitae enim feugiat\n        suscipit. Nam suscipit porttitor purus, quis varius leo convallis ut.\n        Duis et sapien eu quam posuere mattis. Nam id arcu nec nisl tempus\n        sollicitudin in non nibh. Nulla facilisi. Quisque iaculis sapien erat,\n        id feugiat enim finibus eu.\n      </p>\n      <p>\n        Aenean magna nulla, sollicitudin cursus mi id, venenatis vestibulum\n        dolor. Sed turpis dolor, accumsan euismod iaculis at, interdum eget\n        libero. Mauris id ipsum quis dolor elementum hendrerit. Donec feugiat\n        velit eu consequat aliquet. Integer semper, magna eget ornare sagittis,\n        massa dolor lacinia lectus, ut consequat leo urna ac metus. Pellentesque\n        ultrices condimentum lectus sed aliquet. Donec quis molestie erat, ut\n        egestas sapien.\n      </p>\n      <p>\n        Proin sed odio nec sapien convallis facilisis at at neque. Nullam et\n        lacus eget arcu placerat laoreet quis eget ligula. Duis iaculis a massa\n        sit amet dignissim. Donec ut sapien in enim consequat pellentesque ac\n        sed orci. Phasellus euismod dignissim est vitae tincidunt. Maecenas\n        tristique tellus nunc, at rhoncus risus convallis auctor. Nam vel massa\n        vitae elit varius tempor tincidunt sit amet lectus. Sed imperdiet\n        elementum libero in euismod. Nam laoreet nunc sodales lectus lacinia, a\n        tincidunt enim eleifend. Vestibulum ultricies, dui sit amet pharetra\n        scelerisque, orci\n      </p>\n      <p class="pagenumber">16</p>\n    </ion-slide>\n    <ion-slide>\n      <p>\n        mi maximus metus, vestibulum congue nisl justo laoreet lectus. Donec\n        vitae pulvinar ligula, vel pretium ex. Mauris at purus leo. Ut ornare\n        elit efficitur nibh euismod, quis dictum tortor tempor. Suspendisse\n        metus mauris, pellentesque ut nibh id, congue tincidunt risus. Mauris\n        tempus iaculis nulla, id commodo dui gravida et.\n      </p>\n      <p class="pagenumber">17</p>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/jessyrivard/Bethel Tech/MyIonicApps/PageTurner/src/pages/home/home.html"*/
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