webpackJsonp([0],{

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		159
	],
	"../pages/paciente/paciente.module": [
		162
	],
	"../pages/terapeuta/terapeuta.module": [
		163
	],
	"../pages/terapia/terapia.module": [
		164
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacientePageModule", function() { return PacientePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paciente__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PacientePageModule = /** @class */ (function () {
    function PacientePageModule() {
    }
    PacientePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__paciente__["a" /* PacientePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__paciente__["a" /* PacientePage */]),
            ],
        })
    ], PacientePageModule);
    return PacientePageModule;
}());

//# sourceMappingURL=paciente.module.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerapeutaPageModule", function() { return TerapeutaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terapeuta__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TerapeutaPageModule = /** @class */ (function () {
    function TerapeutaPageModule() {
    }
    TerapeutaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__terapeuta__["a" /* TerapeutaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__terapeuta__["a" /* TerapeutaPage */]),
            ],
        })
    ], TerapeutaPageModule);
    return TerapeutaPageModule;
}());

//# sourceMappingURL=terapeuta.module.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerapiaPageModule", function() { return TerapiaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terapia__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TerapiaPageModule = /** @class */ (function () {
    function TerapiaPageModule() {
    }
    TerapiaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__terapia__["a" /* TerapiaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__terapia__["a" /* TerapiaPage */]),
            ],
        })
    ], TerapiaPageModule);
    return TerapiaPageModule;
}());

//# sourceMappingURL=terapia.module.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
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
    HomePage.prototype.userLogin = function (indexType) {
        console.log("sendedIndexType=" + indexType);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */], { data: indexType });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\net\Ionic\udemy\TalkToTalkApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Sistema de Terapia\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background: url(\'../assets/img/bghome.jpg\') no-repeat;background-size: 100% 100%;" padding>\n  Seja bem-vindo ao Sistema de Terapia para pacientes com problemas de dicção.<br><br>\n  Você poderá juntar-se a nós como Paciente ou Terapeuta através da seção de cadastro.<br><br>\n  <ion-list align="center">\n    <ion-item>\n      <ion-img width="120" height="120" src="assets/img/pacientIcon.png" style="margin:auto;display:block;"></ion-img><br><button ion-button color="danger" full (click)="userLogin(\'attrxloginxvalx01\')">+Sou Paciente</button>    \n    </ion-item>\n    <ion-item>\n      <h3><ion-img width="120" height="120" src="assets/img/docIcon.png" style="margin:auto;display:block;"></ion-img><br><button ion-button color="default" full (click)="userLogin(\'attrxloginxvalx02\')">+Sou Médico</button></h3>\n    </ion-item>\n  </ion-list>\n  <audio id="player" name="player" src="http://talktootalk.gear.host/Up/Recordings/sdfRGTBFTGJTUY23243esdfblobtoken532351blobuser.mp3" controls></audio>\n  <div id="waveform" style="border:solid 1px #333;"></div>\n</ion-content>\n'/*ion-inline-end:"C:\net\Ionic\udemy\TalkToTalkApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_terapeuta_terapeuta__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_paciente_paciente__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_terapia_terapia__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_terapeuta_terapeuta_module__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_paciente_paciente_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_terapia_terapia_module__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login_module__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_media__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_storage__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_file_transfer__ = __webpack_require__(87);
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
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paciente/paciente.module#PacientePageModule', name: 'PacientePage', segment: 'paciente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terapeuta/terapeuta.module#TerapeutaPageModule', name: 'TerapeutaPage', segment: 'terapeuta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terapia/terapia.module#TerapiaPageModule', name: 'TerapiaPage', segment: 'terapia', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_5__pages_paciente_paciente_module__["PacientePageModule"],
                __WEBPACK_IMPORTED_MODULE_4__pages_terapeuta_terapeuta_module__["TerapeutaPageModule"],
                __WEBPACK_IMPORTED_MODULE_6__pages_terapia_terapia_module__["TerapiaPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_paciente_paciente__["a" /* PacientePage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_terapeuta_terapeuta__["a" /* TerapeutaPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_terapia_terapia__["a" /* TerapiaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_9__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_media__["a" /* Media */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__["a" /* File */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(206);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\net\Ionic\udemy\TalkToTalkApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\net\Ionic\udemy\TalkToTalkApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PacientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__terapia_terapia__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PacientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PacientePage = /** @class */ (function () {
    function PacientePage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.userIndex = this.navParams.get('data');
        console.log("Requested User Index = " + this.userIndex);
    }
    PacientePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad PacientePage');
        //let params = new URLSearchParams();
        //params.append('id',this.userIndex);
        var params = "id=" + this.userIndex;
        //this.http.post("http://localhost:59109/api/pacientesapi/GetListTerapia/?" + params.toString(), null).subscribe(data => {
        this.http.post("http://talktootalk.gear.host/api/pacientesapi/GetListTerapia/?" + params.toString(), null).subscribe(function (data) {
            console.log("HTTP WEBAPI RESULT TO GetLIST of Paciente = " + JSON.stringify(data.json()));
            if (JSON.stringify(data.json()).toString() != '"false"') {
                var listTerapia = data.json();
                console.log("Data is Retrived");
                console.log(listTerapia[0].Titulo);
                _this.TerapiasList = data.json();
                console.log("DATA LIST = " + _this.TerapiasList.Titulo);
            }
        });
    };
    PacientePage.prototype.readyTerapia = function (terapiaIndex) {
        var blobtoken = Math.floor(Math.random() * 1000000) + 1;
        console.log("SENDER FLAG = " + terapiaIndex + "|" + this.userIndex + "|" + 1 + "|" + blobtoken);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__terapia_terapia__["a" /* TerapiaPage */], { terapiaIndex: terapiaIndex, pacienteIndex: this.userIndex, skipIndex: 0, blobToken: blobtoken });
    };
    PacientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-paciente',template:/*ion-inline-start:"C:\net\Ionic\udemy\TalkToTalkApp\src\pages\paciente\paciente.html"*/'<!--\n  Generated template for the PacientePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sistema de Terapia</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content style="background: url(\'../assets/img/bghome.jpg\') no-repeat;background-size: 100% 100%" padding>\n    <h5>Portal do Paciente:</h5><br>\n    <ion-list align="center">\n      <ion-item>\n        <ion-img width="80" height="80" src="assets/img/pacientIcon.png" style="margin:auto;display:block;"></ion-img><br><button ion-button color="danger" full>+Sou Paciente</button>    \n      </ion-item>\n    </ion-list>\n    No Portal do Paciente você pode escolher a realizar as Terapias disponíveis no sistema.<br><br>\n    Você pode escolher um terapia na lista abaixo:<br><br>\n    <ion-list align="center">\n      <ion-item *ngFor="let item of TerapiasList">\n        {{item.Titulo}}<br><button ion-button color="default" full (click)="readyTerapia(item.TerapiaID)">Acessar Terapia</button>    \n      </ion-item>\n    </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"C:\net\Ionic\udemy\TalkToTalkApp\src\pages\paciente\paciente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], PacientePage);
    return PacientePage;
}());

//# sourceMappingURL=paciente.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerapeutaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_media__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the TerapeutaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TerapeutaPage = /** @class */ (function () {
    function TerapeutaPage(navCtrl, navParams, http, file, txfr, audio) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.file = file;
        this.txfr = txfr;
        this.audio = audio;
        this.itemIsVisible = false;
        this.userIndex = this.navParams.get('data');
        console.log("Requested User Index = " + this.userIndex);
    }
    TerapeutaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad TerapeutaPage');
        var params = "id=" + this.userIndex;
        //this.http.post("http://localhost:59109/api/pacientesapi/GetListTerapia/?" + params.toString(), null).subscribe(data => {
        this.http.post("http://talktootalk.gear.host/api/terapeutasapi/GetTerapiasUsers/?" + params.toString(), null).subscribe(function (data) {
            console.log("HTTP WEBAPI RESULT TO GetLIST of Pacientes = " + JSON.stringify(data.json()));
            if (JSON.stringify(data.json()).toString() != '"false"') {
                var listTerapia = data.json();
                console.log("Data is Retrived");
                console.log(listTerapia[0].Nome);
                _this.TerapiasList = listTerapia;
                console.log("DATA LIST = " + listTerapia[0].Nome);
            }
        });
    };
    TerapeutaPage.prototype.getUserTerapias = function (id, name) {
        var _this = this;
        this.userName = name;
        this.http.post("http://talktootalk.gear.host/api/terapeutasapi/GetTerapiasUsersEvaluate/?id=" + id, null).subscribe(function (data) {
            console.log("HTTP WEBAPI RESULT TO GetLIST of Paciente = " + JSON.stringify(data.json()));
            if (JSON.stringify(data.json()).toString() != '"false"') {
                var listTerapiaPaciente = data.json();
                console.log("Data is Retrived");
                console.log(listTerapiaPaciente[0].TerapiaHistoricoID);
                _this.TerapiasListPaciente = listTerapiaPaciente;
                console.log("DATA LIST = " + listTerapiaPaciente[0].TerapiaHistoricoID);
            }
        });
    };
    TerapeutaPage.prototype.getUserTerapiaItem = function (id) {
        var _this = this;
        this.itemIsVisible = true;
        this.http.post("http://talktootalk.gear.host/api/terapeutasapi/GetTerapiasUsersEvaluateItem/?id=" + id, null).subscribe(function (data) {
            console.log("HTTP WEBAPI RESULT TO GetTerapiaItem of Paciente = " + JSON.stringify(data.json()));
            if (JSON.stringify(data.json()).toString() != '"false"') {
                var terapiaTopico = data.json();
                console.log("Data is Retrived");
                console.log(terapiaTopico.TerapiaHistoricoID);
                _this.TerapiaItem = terapiaTopico;
                console.log("DATA LIST = " + terapiaTopico.TerapiaHistoricoID);
                _this.itemDate = terapiaTopico.DataCadastro;
                _this.itemAverage = terapiaTopico.Avaliacao;
                _this.itemAudio = "http://talktootalk.gear.host/Up/Recordings/" + terapiaTopico.audioProcessado;
            }
        });
    };
    TerapeutaPage.prototype.playAudioItem = function (file) {
        var _this = this;
        var fileUrl = "http://talktootalk.gear.host/Up/Recordings/" + file;
        var ft = this.txfr.create();
        var fn = this.file.dataDirectory + fileUrl.substring(fileUrl.lastIndexOf('/') + 1);
        ft.download(fileUrl, fn).then(function (fe) {
            var song = _this.audio.create(fe.nativeURL);
            song.play();
            //this.ProcessAudio(audiofile);
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    TerapeutaPage.prototype.closeItem = function () {
        this.itemIsVisible = false;
    };
    TerapeutaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terapeuta',template:/*ion-inline-start:"C:\net\Ionic\udemy\TalkToTalkApp\src\pages\terapeuta\terapeuta.html"*/'<!--\n  Generated template for the PacientePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sistema de Terapia</ion-title>\n  </ion-navbar>\n  <script type="text/javascript">\n    alert("js is running");\n  </script>\n</ion-header>\n\n<ion-content style="background: url(\'../assets/img/bghome.jpg\') no-repeat;background-size: 100% 100%" padding>\n    <h5>Portal do Terapeuta:</h5><br>\n    <ion-list align="center">\n      <ion-item>\n        <ion-img width="80" height="80" src="assets/img/docIcon.png" style="margin:auto;display:block;"></ion-img><br><button ion-button color="danger" full>+Sou Terapeuta</button>    \n      </ion-item>\n    </ion-list>\n    No Portal do Terapeuta você pode escolher a realizar as Terapias disponíveis no sistema.<br><br>\n    Você pode avaliar os pacientes abaixo:<br><br>\n    <!--<button ion-button color="default" full (click)="openTerapias()">Listar Pacientes</button>-->\n    <ion-list align="center">\n      <ion-item *ngFor="let item of TerapiasList">\n        Paciente: {{item.Nome}}<br><button ion-button color="default" full (click)="getUserTerapias(item.PacienteID, item.Nome)">Avaliar Paciente</button>    \n      </ion-item>\n    </ion-list>\n    <ng-container *ngIf="!itemIsVisible">\n    <ion-list align="center">\n      <ion-item *ngFor="let item of TerapiasListPaciente">\n        Paciente em Avaliação: {{userName}}<br>\n        Data: {{itemDate}}<br>\n        <button ion-button color="default" full (click)="getUserTerapiaItem(item.TerapiaHistoricoID)">Acessar Terapias</button>\n      </ion-item>\n    </ion-list>\n    </ng-container>\n    <ng-container *ngIf="itemIsVisible">\n    <ion-list align="center">\n      <ion-item>\n        {{userName}}\n        Data: {{itemDate}}<br>Avaliação: {{itemAverage}}<br>\n        <!--<button ion-button color="default" full (click)="playAudioItem(itemAudio)">Tocar Gravação</button>-->\n        <audio id="player" name="player" src="{{itemAudio}}" controls onclick="javascript:playAudioGraph();"></audio>\n        <button ion-button color="default" full (click)="closeItem()">[x] Fechar</button>\n        <canvas id="canvas" width="920px" height="150px"></canvas>\n      </ion-item>\n    </ion-list>\n    </ng-container>\n</ion-content>\n\n'/*ion-inline-end:"C:\net\Ionic\udemy\TalkToTalkApp\src\pages\terapeuta\terapeuta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_media__["a" /* Media */]])
    ], TerapeutaPage);
    return TerapeutaPage;
}());

//# sourceMappingURL=terapeuta.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__terapeuta_terapeuta__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paciente_paciente__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loginType = "";
        this.userBanner = "assets/img/pacientIcon.png";
        this.userColor = "danger";
        this.userLabel = "+Sou Paciente";
        this.loginEmail = "";
        this.loginSenha = "";
        this.loginStatus = 'Wating for loggin start...';
        this.loginType = this.navParams.get('data');
        if (this.loginType == "attrxloginxvalx01") {
            this.userBanner = 'assets/img/pacientIcon.png';
            this.userColor = 'danger';
            this.userLabel = '+Sou Paciente';
        }
        else if (this.loginType == "attrxloginxvalx02") {
            this.userBanner = 'assets/img/docIcon.png';
            this.userColor = 'default';
            this.userLabel = '+Sou Médico';
        }
        else {
            this.navCtrl.pop();
        }
        console.log('userType=' + this.loginType);
        console.log('userLabel=' + this.userLabel);
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        console.log('userLabel[2]=' + this.userLabel);
        console.log('userColor[2]=' + this.userColor);
    };
    LoginPage.prototype.userLoggin = function () {
        var _this = this;
        this.loginStatus = 'Wating when loggin is opend...';
        var email = this.loginEmail.toString();
        var senha = this.loginSenha.toString();
        //let params = new URLSearchParams();
        //params.append('email',email);
        //params.append('senha',senha);
        var data = {
            'email': email,
            'senha': senha
        };
        this.loginStatus = 'Wating when loggin is sended...';
        if (this.loginType == "attrxloginxvalx01") {
            this.loginStatus = 'Wating for loggin Paciente is sended...';
            //this.http.post("http://localhost:59109/api/pacientesapi/Login/?" + params.toString(), null).subscribe(data => {
            this.http.post("http://talktootalk.gear.host/api/pacientesapi/Login?email=" + email + "&senha=" + senha, null).subscribe(function (data) {
                if (JSON.stringify(data.json()).toString() != '"false"') {
                    _this.loginStatus = 'Loggin is sended, wait for result...';
                    _this.PacienteData = data.json();
                    console.log("HTTP WEBAPI RESULT TO LOGIN = " + _this.PacienteData.PacienteID);
                    _this.loginStatus = 'Loggin is succefuly...';
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__paciente_paciente__["a" /* PacientePage */], { data: _this.PacienteData.PacienteID });
                }
            }, function (error) {
                _this.loginStatus = 'Loggin dont works...';
                console.log(JSON.stringify(error.json()));
            });
        }
        else if (this.loginType == "attrxloginxvalx02") {
            this.loginStatus = 'Wating for loggin Terapeuta is sended...';
            //this.http.post("http://192.168.0.7:59109/api/terapeutasapi/Login/?email=" +email + "&senha=" + senha, null).subscribe(data => {
            this.http.post("http://talktootalk.gear.host/api/terapeutasapi/Login?email=" + email + "&senha=" + senha, null).subscribe(function (data) {
                if (JSON.stringify(data.json()).toString() != '"false"') {
                    _this.loginStatus = 'Loggin is sended, wait for result...';
                    _this.TerapeutaData = data.text();
                    console.log("HTTP WEBAPI RESULT TO LOGIN = " + _this.TerapeutaData);
                    _this.loginStatus = 'Loggin is succefuly...';
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__terapeuta_terapeuta__["a" /* TerapeutaPage */], { data: _this.TerapeutaData });
                }
            }, function (error) {
                _this.loginStatus = 'Loggin dont works...';
                console.log(JSON.stringify(error.json()));
            });
        }
        else {
            this.navCtrl.pop();
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\net\Ionic\udemy\TalkToTalkApp\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sistema de Terapia</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content style="background: url(\'../assets/img/bghome.jpg\') no-repeat;background-size: 100% 100%" padding>\n    <h5>Área de Acesso:</h5><br>\n    Você deve acessar o sistema com sua identificação e senha.<br><br>\n    <ion-list align="center">\n      <ion-item>\n        <ion-img width="80" height="80" src="{{userBanner}}" style="margin:auto;display:block;"></ion-img><br><button ion-button color="{{userColor}}" full>{{userLabel}}</button>    \n      </ion-item>\n      <ion-item>\n          <ion-label color="primary" floating>+Seu e-mail</ion-label>\n          <ion-input type="email" [(ngModel)]="loginEmail" name="loginEmail"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label color="primary" floating>+Sua senha</ion-label>\n          <ion-input type="password" [(ngModel)]="loginSenha" name="loginSenha"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-textarea style="color:red;" [(ngModel)]="loginStatus" name="loginStatus"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <button ion-button color="{{userColor}}" full (click)="userLoggin()">+Acessar</button>\n      </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\net\Ionic\udemy\TalkToTalkApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerapiaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paciente_paciente__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_media__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the TerapiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TerapiaPage = /** @class */ (function () {
    function TerapiaPage(navCtrl, navParams, http, media, file, platform, storage, transfer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.media = media;
        this.file = file;
        this.platform = platform;
        this.storage = storage;
        this.transfer = transfer;
        this.terapiaIndex = "";
        this.pacienteIndex = "";
        this.skipIndex = "";
        this.blobToken = "";
        this.TerapiaItem = "";
        this.terapiaTitulo = "";
        this.recording = false;
        this.recordingIco = 'assets/img/micico.png';
        this.audioList = [];
        //New Test of recording media
        this.recordingMessage = "Wating for records...";
        this.mediaFiles = [];
        //@ViewChild('myvideo') myVideo: any;
        this.MEDIA_FILES_KEY = 'mediaFiles';
        this.isPlay = false;
        this.audioIco = 'assets/img/playico.png';
        this.terapiaIndex = this.navParams.get('terapiaIndex');
        this.pacienteIndex = this.navParams.get('pacienteIndex');
        this.skipIndex = this.navParams.get('skipIndex');
        this.blobToken = this.navParams.get('blobToken');
        console.log("Requested Index = " + this.terapiaIndex + "/" + this.pacienteIndex + "/" + this.skipIndex + "/" + this.blobToken);
        /*let params = new URLSearchParams();
        params.append('idPaciente',this.pacienteIndex);
        params.append('idTerapia',this.terapiaIndex);
        params.append('skip',this.skipIndex);
        params.append('blobtoken', this.blobToken);*/
        var params = "idPaciente=" + this.pacienteIndex + "&idTerapia=" + this.terapiaIndex + "&skip=" + this.skipIndex + "&blobtoken=" + this.blobToken;
        //this.http.post("http://localhost:59109/api/pacientesapi/Ready/?" + params.toString(), null).subscribe(data => {
        this.http.post("http://talktootalk.gear.host/api/pacientesapi/Ready/?" + params.toString(), null).subscribe(function (data) {
            console.log("HTTP WEBAPI RESULT TO GetLIST of Paciente = " + JSON.stringify(data.json()));
            if (JSON.stringify(data.json()).toString() != '"false"') {
                console.log("Data is Retrived");
                _this.TerapiaItem = data.json();
                console.log("Terapia DATA LIST = " + _this.TerapiaItem.Titulo);
                _this.terapiaTitulo = _this.TerapiaItem.Terapia.Titulo;
                if (JSON.stringify(data.json()).toString() == '"false"') {
                    console.log("The Teraphy is ended by server");
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__paciente_paciente__["a" /* PacientePage */], { data: _this.pacienteIndex });
                }
            }
        });
    }
    TerapiaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TerapiaPage');
    };
    TerapiaPage.prototype.requestNewItem = function () {
        var _this = this;
        this.skipIndex = this.skipIndex + 1;
        /*let params = new URLSearchParams();
        params.append('idPaciente',this.pacienteIndex);
        params.append('idTerapia',this.terapiaIndex);
        params.append('skip',this.skipIndex);
        params.append('blobtoken', this.blobToken);*/
        var params = "idPaciente=" + this.pacienteIndex + "&idTerapia=" + this.terapiaIndex + "&skip=" + this.skipIndex + "&blobtoken=" + this.fileName;
        //this.http.post("http://localhost:59109/api/pacientesapi/Ready/?" + params.toString(), null).subscribe(data => {
        this.http.post("http://talktootalk.gear.host/api/pacientesapi/Ready/?" + params.toString(), null).subscribe(function (data) {
            console.log("HTTP WEBAPI RESULT TO GetLIST of Paciente = " + JSON.stringify(data.json()));
            if (JSON.stringify(data.json()).toString() != '"false"') {
                console.log("Data is Retrived");
                _this.TerapiaItem = data.json();
                if (JSON.stringify(data.json()).toString() == '"end"') {
                    console.log("The Teraphy is ended by server");
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__paciente_paciente__["a" /* PacientePage */], { data: _this.pacienteIndex });
                }
                console.log("Terapia DATA LIST = " + _this.TerapiaItem.Titulo);
            }
        });
    };
    TerapiaPage.prototype.accessRecording = function () {
        //this.captureAudio();
        if (this.recording) {
            this.recordingIco = 'assets/img/micico.png';
            this.stopRecord();
        }
        else {
            this.recordingIco = 'assets/img/cancelico.png';
            this.startRecord();
        }
    };
    TerapiaPage.prototype.accessPlay = function () {
        var _this = this;
        //this.captureAudio();
        if (this.isPlay) {
            this.audioIco = 'assets/img/playico.png';
            this.platform.ready().then(function () {
                if (_this.audio) {
                    //const audio:MediaObject  = this.media.create(this.filePath);
                    //this.audio.stop();
                    _this.audio.stop();
                    _this.audio.release();
                    _this.recordingMessage = "The audio is stoped...";
                    _this.isPlay = false;
                }
            });
        }
        else {
            this.audioIco = 'assets/img/cancelico.png';
            this.playAudio();
            this.isPlay = true;
        }
    };
    TerapiaPage.prototype.startRecord = function () {
        var _this = this;
        this.recordingMessage = "Device is preparing to record...";
        if (this.platform.is('ios')) {
            this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.mp3';
            this.filePath = this.file.dataDirectory + this.fileName;
            this.audio = this.media.create(this.filePath);
        }
        else if (this.platform.is('android')) {
            this.platform.ready().then(function () {
                _this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.mp3';
                _this.filePath = _this.file.externalDataDirectory + _this.fileName;
                _this.audio = _this.media.create(_this.filePath);
                _this.audio.onStatusUpdate.subscribe(function (status) { return console.log('status>>>>>>>>>', status); }); // fires when file status changes
                _this.audio.onSuccess.subscribe(function () { return console.log('Action is successful'); });
                _this.audio.onError.subscribe(function (error) { return console.log('Error!', error); });
                console.log("recording file = " + _this.filePath);
                console.log("start recording...");
                console.log("recording is started...");
                _this.recordingMessage = "Device is recording...";
                _this.audio.startRecord();
                _this.recording = true;
            });
        }
    };
    TerapiaPage.prototype.stopRecord = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.audio.stopRecord();
            _this.audio.release();
            console.log("Recording is stoped...");
            _this.recordingMessage = "Recording is ended...";
            /*      let data = { filename: this.fileName };
                  this.audioList.push(data);
                  localStorage.setItem("audiolist", JSON.stringify(this.audioList));*/
            _this.recording = false;
            _this.uploadFile();
        });
    };
    TerapiaPage.prototype.playAudio = function () {
        var _this = this;
        if (this.platform.is('ios')) {
            this.filePath = this.file.dataDirectory + this.fileName;
            this.audio = this.media.create(this.filePath);
        }
        else if (this.platform.is('android')) {
            this.platform.ready().then(function () {
                if (_this.audio) {
                    _this.audio = _this.media.create(_this.filePath);
                    //this.audio.stop();
                    _this.audio.play();
                    _this.audio.setVolume(0.8);
                    console.log("The device is playing audio...");
                    _this.recordingMessage = "Device is playing audio...";
                    console.log(_this.audio);
                }
                else {
                    console.log("The device not yeat ready or instance is null...");
                    console.log(_this.audio);
                }
            });
        }
    };
    //Too upload file
    TerapiaPage.prototype.uploadFile = function () {
        var _this = this;
        this.recordingMessage = "Uploading recording...";
        var fileTransfer = this.transfer.create();
        this.recordingMessage = "Upload object is created...";
        var options = {
            fileKey: 'file',
            fileName: this.fileName,
            chunkedMode: false,
        };
        this.recordingMessage = "Upload options is created...";
        console.log("Upload options is created for " + this.filePath);
        this.file.checkFile(this.file.dataDirectory + 'rec/', this.fileName).then(function (files) {
            _this.recordingMessage = "Upload file exists...";
            console.log("files found" + files);
        }).catch(function (err) {
            _this.recordingMessage = "Upload file not exists...";
            console.log("files not found ");
        });
        fileTransfer.upload(this.filePath, encodeURI('http://talktootalk.gear.host/api/pacientesapi/UploadAppAudio'), options, true)
            .then(function (data) {
            _this.fileName = data.response.replace(/"([^"]+(?="))"/g, '$1');
            console.log(data.response + " Uploaded Successfully | File = http://talktootalk.gear.host/Up/Recordings/" + _this.fileName);
            _this.audioFileName = "http://talktootalk.gear.host/Up/Recordings/" + data.response.replace(/"([^"]+(?="))"/g, '$1');
            _this.recordingMessage = "Recording uploaded successfully...";
        }, function (err) {
            console.log("UPLOAD ERROR = " + err.exception);
            //this.recordingMessage = "Upload Error...";
        });
    };
    TerapiaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-terapia',template:/*ion-inline-start:"C:\net\Ionic\udemy\TalkToTalkApp\src\pages\terapia\terapia.html"*/'<!--\n  Generated template for the TerapiaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sistema de Terapia</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content style="background: url(\'../assets/img/bghome.jpg\') no-repeat;background-size: 100% 100%" padding>\n    <h2>{{terapiaTitulo}}</h2>\n    <h4>{{TerapiaItem.Titulo}}</h4>\n    <h6>{{TerapiaItem.Descricao}}</h6>\n    <ion-list>\n      <ion-item>\n        <img width="100%" height="100px" src="{{TerapiaItem.Imagem}}" style="margin:auto;display:block;"/><br>\n      </ion-item>\n      <ion-item style="text-align: center;">\n        <h6>Pressione o botão para gravar:</h6><br>\n        <button (click)="accessRecording()"><ion-img width="70px" height="70px" src=\'{{recordingIco}}\' style="margin:auto;display:block;"></ion-img></button>\n        <button (click)="accessPlay()"><ion-img width="70px" height="70px" src=\'{{audioIco}}\' style="margin:auto;display:block;"></ion-img></button>\n      </ion-item>\n      <ion-item>\n        <ion-textarea style="color:red;" [(ngModel)]="recordingMessage" name="recordingMessage"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <button ion-button color="danger" full (click)="requestNewItem()">Enviar</button>\n      </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\net\Ionic\udemy\TalkToTalkApp\src\pages\terapia\terapia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_media__["a" /* Media */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */]])
    ], TerapiaPage);
    return TerapiaPage;
}());

//# sourceMappingURL=terapia.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map