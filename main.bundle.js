webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/additionally/additionally.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"additionally\" class=\"gradient-background\">\n\t<div class=\"container\">\n\t\t<h1>תוספות</h1>\n\t\t<h3>באפשרותך להחור תוספת לשירות , במידה ואינך מעוניין , לחץ המשך</h3>\n\t\t\n\t\t<form #additionallyFrom=\"ngForm\" (ngSubmit)=\"onSubmit(additionallyFrom)\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t<div class=\"options\">\n\t\t\t\t\t\t<div class=\"option-item option-item-blue\">\n\t\t\t\t\t\t\t<div class=\"option-content\">\n\t\t\t\t\t\t\t\t<span>שיחות</span>\n\t\t\t\t\t\t\t\t<b>₪ 59</b>\n\t\t\t\t\t\t\t\t<span>UNLIMITED</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<button mat-button class=\"bg-button bg-orange-button\"\n\t\t\t\t\t\t\t(click)=\"scrollAnimate(appTotal)\"\n\t\t\t\t\t\t\t(click)=\"isShow='show'\">המשך</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"option-item option-item-orange\">\n\t\t\t\t\t\t\t<div class=\"option-content\">\n\t\t\t\t\t\t\t\t<span>שיחות</span>\n\t\t\t\t\t\t\t\t<b>₪ 29</b>\n\t\t\t\t\t\t\t\t<span>60 דק׳</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<button mat-button class=\"bg-button bg-orange-button\"\n\t\t\t\t\t\t\t(click)=\"scrollAnimate(appTotal)\"\n\t\t\t\t\t\t\t(click)=\"isShow='show'\">המשך</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t<button mat-button class=\"bg-button bg-green-button\"\n\t\t\t\t\t(click)=\"scrollAnimate(appTotal)\"\n\t\t\t\t\t(click)=\"isShow='show'\">המשך</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\n\t</div>\n</section>\n\n<!--  -->\n<!-- <pre>{{ simAcriveFromData | json }}</pre> -->\n<!--  -->\n\n<div [@toggleHeight]=\"isShow\" #appTotal>\n\t<app-total [additionallyFromData]=\"additionallyFrom.value\">\n\t</app-total>\n</div>"

/***/ }),

/***/ "./src/app/additionally/additionally.component.scss":
/***/ (function(module, exports) {

module.exports = ".gradient-background {\n  background: -webkit-gradient(linear, left top, right top, from(#512e7f), color-stop(80%, #a5196a), to(#a5196a));\n  background: linear-gradient(to right, #512e7f 0%, #a5196a 80%, #a5196a 100%); }\n  .gradient-background .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n    color: #fff; }\n  .gray-background {\n  background: #f1f1f1; }\n  h1, h2, h3, h4, h5, h6 {\n  margin: 10px 0; }\n  h1 {\n  font-size: 26px;\n  font-weight: 900; }\n  h2 {\n  font-size: 20px; }\n  h3 {\n  font-size: 18px; }\n  label {\n  font-weight: 400; }\n  .hedline {\n  text-align: center;\n  -webkit-box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n          box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-height: -webkit-max-content;\n  min-height: -moz-max-content;\n  min-height: max-content; }\n  .hedline h1 {\n    font-weight: 900; }\n  a {\n  color: #000; }\n  a:hover {\n  text-decoration: none; }\n  swiper > .swiper.s-wrapper .swiper-pagination .swiper-pagination-handle {\n  margin: 8px; }\n  .swiper-pagination-handle .swiper-pagination-bullet {\n  width: 15px;\n  height: 15px;\n  opacity: 1;\n  border: 2px solid #fff !important;\n  background: #fff; }\n  .swiper-pagination-handle .swiper-pagination-bullet-active {\n  background: transparent;\n  border: 2px solid #fff !important;\n  margin: 0 !important; }\n  input:-webkit-autofill {\n  -webkit-text-fill-color: #000 !important; }\n  input:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0 30px white inset; }\n  .mat-menu-panel {\n  width: 200px;\n  margin-top: 38px;\n  margin-left: -30px; }\n  .mat-elevation-z2 {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important; }\n  .mat-button-focus-overlay {\n  background-color: transparent !important; }\n  .mat-menu-panel button {\n  text-align: right;\n  font-size: 18px;\n  height: 30px;\n  line-height: 1;\n  padding: 0 20px;\n  font-family: 'Open Sans Hebrew', sans-serif; }\n  .mat-menu-content {\n  padding: 10px 0 !important; }\n  .mat-input-wrapper,\n.bg-button {\n  border-radius: 12px;\n  margin-bottom: 26px;\n  font-weight: 100;\n  font-size: 18px;\n  height: 50px; }\n  .mat-form-field-infix {\n  border: 0;\n  height: 50px;\n  line-height: 1.8;\n  padding-right: 10px; }\n  .mat-form-field {\n  max-width: 100%;\n  width: 100%; }\n  .mat-input-wrapper {\n  background: #fff;\n  color: #757575;\n  text-align: right;\n  padding-right: 30px; }\n  .mat-form-field-suffix {\n  position: absolute;\n  border-radius: 0;\n  width: 100%;\n  height: 100%; }\n  .mat-datepicker-toggle .mat-icon-button {\n  width: 100%;\n  height: 100%;\n  text-align: right;\n  padding-right: 10px; }\n  .mat-select-value {\n  padding-right: 24px; }\n  .mat-select-arrow-wrapper {\n  position: relative;\n  right: -12px; }\n  .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #733071; }\n  .mat-form-field-underline {\n  display: none; }\n  .mat-select-panel .mat-optgroup-label, .mat-select-panel .mat-option {\n  height: 50px; }\n  .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  margin-top: -8px;\n  line-height: 2;\n  color: #000; }\n  .bg-button {\n  color: #fff !important;\n  border-radius: 12px;\n  width: 100%;\n  font-size: 22px;\n  height: 50px;\n  background: -webkit-gradient(linear, left top, right top, from(#512e7f), color-stop(80%, #a5196a), to(#a5196a));\n  background: linear-gradient(to right, #512e7f 0%, #a5196a 80%, #a5196a 100%); }\n  .bg-button.bg-green-button {\n  background: #019b94;\n  max-width: 260px;\n  margin: 0 auto;\n  display: block; }\n  .bg-button.bg-orange-button {\n  background: #fcb30e;\n  margin: 0 auto;\n  margin: 20px auto;\n  display: block;\n  width: 180px; }\n  .mat-checkbox-inner-container,\n.mat-checkbox-frame {\n  width: 20px !important;\n  height: 20px !important;\n  border-radius: 5px !important;\n  padding-left: 10px; }\n  .mat-checkbox {\n  color: #000;\n  font-size: 20px !important;\n  font-weight: 200 !important; }\n  .mat-checkbox-layout {\n  width: 100% !important; }\n  .mat-checkbox-layout .mat-checkbox-label {\n  width: 100%;\n  text-align: right;\n  white-space: pre-line; }\n  .mat-checkbox-checked.mat-accent .mat-checkbox-background,\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background {\n  background: #019b94;\n  border-radius: 5px; }\n  .mat-form-field-hint-wrapper {\n  margin-top: 20px; }\n  .mat-tooltip-panel {\n  border-radius: 10px; }\n  .mat-tooltip {\n  background-color: #019b94;\n  font-size: 12px;\n  border-radius: 10px;\n  padding: 10px 20px !important;\n  font-weight: 200;\n  max-width: 310px !important; }\n  @media screen and (-ms-high-contrast: active) {\n  .mat-tooltip {\n    outline: solid 0px; } }\n  .mat-tooltip-handset {\n  margin: 24px;\n  padding-left: 16px;\n  padding-right: 16px; }\n  .example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .example-container > * {\n  width: 100%; }\n  .example-right-align {\n  text-align: right; }\n  input::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  display: none; }\n  input {\n  -moz-appearance: textfield; }\n  button {\n  -webkit-transition: opacity 1s;\n  transition: opacity 1s; }\n  button:disabled {\n  opacity: .5; }\n  /* Large devices (large desktops, 1200px and up) */\n  @media only screen and (max-width: 1200px) {\n  #page-banner .banner-content .banner-text {\n    font-size: 80px;\n    max-width: 400px; } }\n  /* Medium devices (desktops, 992px and up) */\n  /* Small devices (tablets, 768px and up) */\n  #additionally h1 {\n  text-align: center;\n  margin-top: 50px;\n  color: #fff;\n  margin-bottom: 10px; }\n  #additionally h3 {\n  text-align: center;\n  color: #fff;\n  margin-bottom: 28px;\n  font-size: 18px; }\n  #additionally .options {\n  display: block;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  max-width: 100%;\n  margin: 0 auto; }\n  #additionally .options .option-item {\n    padding: 24px 26px;\n    display: inline-block;\n    margin-bottom: 20px; }\n  #additionally .options .option-item .option-content {\n      width: 180px;\n      height: 180px;\n      border-radius: 50%;\n      text-align: center;\n      display: block;\n      margin: 10px auto;\n      -webkit-box-shadow: 0px 3px 4.7px 0.3px rgba(0, 0, 0, 0.24), 0px 1px 5.88px 0.12px rgba(0, 0, 0, 0.16);\n              box-shadow: 0px 3px 4.7px 0.3px rgba(0, 0, 0, 0.24), 0px 1px 5.88px 0.12px rgba(0, 0, 0, 0.16);\n      color: #fff;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-transition: all .3s;\n      transition: all .3s;\n      cursor: default; }\n  #additionally .options .option-item .option-content:hover {\n        -webkit-transform: scale(1.1);\n                transform: scale(1.1); }\n  #additionally .options .option-item .option-content span {\n        font-size: 20px;\n        font-weight: bold; }\n  #additionally .options .option-item .option-content b {\n        font-size: 60px;\n        display: block;\n        font-weight: 900;\n        line-height: 59px; }\n  #additionally .options .option-item .bg-orange-button {\n      margin-top: 50px;\n      margin-bottom: 6px; }\n  #additionally .options .option-item-orange .option-content {\n    background-image: -webkit-gradient(linear, left top, right top, from(#473384), to(#077fbf));\n    background-image: linear-gradient(to right, #473384 0%, #077fbf 100%); }\n  #additionally .options .option-item-blue .option-content {\n    background-image: -webkit-gradient(linear, left top, right top, from(#fec80a), to(#ed2b26));\n    background-image: linear-gradient(to right, #fec80a 0%, #ed2b26 100%); }\n  #additionally .bg-button {\n  margin-bottom: 60px; }\n  /* Small devices (tablets, 768px and up) */\n  @media only screen and (max-width: 768px) {\n  #additionally .options .option-item {\n    display: block; } }\n"

/***/ }),

/***/ "./src/app/additionally/additionally.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdditionallyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation__ = __webpack_require__("./src/app/animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdditionallyComponent = /** @class */ (function () {
    function AdditionallyComponent() {
        // show animation
        this.isShow = 'hide';
    }
    AdditionallyComponent.prototype.onSubmit = function (additionallyFrom) {
        this.isShow = 'show';
        console.log(this.isShow);
    };
    // scroll animate
    AdditionallyComponent.prototype.scrollAnimate = function (element) {
        setTimeout(function () {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 250);
    };
    AdditionallyComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], AdditionallyComponent.prototype, "simAcriveFromData", void 0);
    AdditionallyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-additionally',
            template: __webpack_require__("./src/app/additionally/additionally.component.html"),
            animations: [
                __WEBPACK_IMPORTED_MODULE_1__animation__["a" /* toggleHeight */]
            ],
            styles: [__webpack_require__("./src/app/additionally/additionally.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdditionallyComponent);
    return AdditionallyComponent;
}());



/***/ }),

/***/ "./src/app/animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toggleHeight; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var toggleHeight = Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* trigger */])('toggleHeight', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* state */])('hide', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* style */])({
        height: '0px',
        opacity: '0',
        overflow: 'hidden',
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* state */])('show', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* style */])({
        height: '*',
        opacity: '1',
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* transition */])('hide => show', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* animate */])('200ms 50ms ease-in')),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* transition */])('show => hide', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* animate */])('200ms ease-out'))
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sim_order_page_sim_order_page_component__ = __webpack_require__("./src/app/sim-order-page/sim-order-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__homa_page_homa_page_component__ = __webpack_require__("./src/app/homa-page/homa-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    // { path: 'sim-order', redirectTo: '/', pathMatch: 'full'},
    { path: 'sim-order', component: __WEBPACK_IMPORTED_MODULE_2__sim_order_page_sim_order_page_component__["a" /* SimOrderPageComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__homa_page_homa_page_component__["a" /* HomaPageComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<app-header></app-header>\n\n<!-- router -->\n<router-outlet></router-outlet>\n\n<!-- Footer -->\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__(document).ready(function () {
            // console.log( 'test' 
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_swiper_wrapper__ = __webpack_require__("./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_slider_home_slider_component__ = __webpack_require__("./src/app/home-slider/home-slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__fly_form_fly_form_component__ = __webpack_require__("./src/app/fly-form/fly-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__banner_banner_component__ = __webpack_require__("./src/app/banner/banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__payment_payment_component__ = __webpack_require__("./src/app/payment/payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__total_total_component__ = __webpack_require__("./src/app/total/total.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__additionally_additionally_component__ = __webpack_require__("./src/app/additionally/additionally.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__form_sim_form_sim_component__ = __webpack_require__("./src/app/form-sim/form-sim.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__client_info_client_info_component__ = __webpack_require__("./src/app/client-info/client-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__sim_active_form_sim_active_form_component__ = __webpack_require__("./src/app/sim-active-form/sim-active-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__homa_page_homa_page_component__ = __webpack_require__("./src/app/homa-page/homa-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__sim_order_page_sim_order_page_component__ = __webpack_require__("./src/app/sim-order-page/sim-order-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__promotion_promotion_component__ = __webpack_require__("./src/app/promotion/promotion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__details_form_details_form_component__ = __webpack_require__("./src/app/details-form/details-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__offers_offers_component__ = __webpack_require__("./src/app/offers/offers.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// anumation

// materual


// main componenrts



// ngx-swiper-wrapper


// routing















var DEFAULT_SWIPER_CONFIG = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_slider_home_slider_component__["a" /* HomeSliderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__fly_form_fly_form_component__["a" /* FlyFormComponent */],
                __WEBPACK_IMPORTED_MODULE_12__banner_banner_component__["a" /* BannerComponent */],
                __WEBPACK_IMPORTED_MODULE_13__payment_payment_component__["a" /* PaymentComponent */],
                __WEBPACK_IMPORTED_MODULE_14__total_total_component__["a" /* TotalComponent */],
                __WEBPACK_IMPORTED_MODULE_15__additionally_additionally_component__["a" /* AdditionallyComponent */],
                __WEBPACK_IMPORTED_MODULE_16__form_sim_form_sim_component__["a" /* FormSimComponent */],
                __WEBPACK_IMPORTED_MODULE_17__client_info_client_info_component__["a" /* ClientInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_18__sim_active_form_sim_active_form_component__["a" /* SimActiveFormComponent */],
                __WEBPACK_IMPORTED_MODULE_19__homa_page_homa_page_component__["a" /* HomaPageComponent */],
                __WEBPACK_IMPORTED_MODULE_20__sim_order_page_sim_order_page_component__["a" /* SimOrderPageComponent */],
                __WEBPACK_IMPORTED_MODULE_21__promotion_promotion_component__["a" /* PromotionComponent */],
                __WEBPACK_IMPORTED_MODULE_22__details_form_details_form_component__["a" /* DetailsFormComponent */],
                __WEBPACK_IMPORTED_MODULE_23__offers_offers_component__["a" /* OffersComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_swiper_wrapper__["d" /* SwiperModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatMenuModule */],
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_8_ngx_swiper_wrapper__["a" /* SWIPER_CONFIG */],
                    useValue: DEFAULT_SWIPER_CONFIG
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/banner/banner.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"page-banner\">\n\t<div class=\"banner-content\">\n\t\t<img src=\"{{urlImage}}\" alt=\"banner\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"banner-text\">{{bannerText}}</div>\n\t\t</div>\n\t</div>\n\t<div class=\"hedline\">\n\t\t<div class=\"container\">\n\t\t\t<h1>{{headlineTitle}}</h1>\n\t\t</div>\n\t</div>\n</section>"

/***/ }),

/***/ "./src/app/banner/banner.component.scss":
/***/ (function(module, exports) {

module.exports = ".gradient-background {\n  background: -webkit-gradient(linear, left top, right top, from(#512e7f), color-stop(80%, #a5196a), to(#a5196a));\n  background: linear-gradient(to right, #512e7f 0%, #a5196a 80%, #a5196a 100%); }\n  .gradient-background .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n    color: #fff; }\n  .gray-background {\n  background: #f1f1f1; }\n  h1, h2, h3, h4, h5, h6 {\n  margin: 10px 0; }\n  h1 {\n  font-size: 26px;\n  font-weight: 900; }\n  h2 {\n  font-size: 20px; }\n  h3 {\n  font-size: 18px; }\n  label {\n  font-weight: 400; }\n  .hedline {\n  text-align: center;\n  -webkit-box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n          box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-height: -webkit-max-content;\n  min-height: -moz-max-content;\n  min-height: max-content; }\n  .hedline h1 {\n    font-weight: 900; }\n  a {\n  color: #000; }\n  a:hover {\n  text-decoration: none; }\n  swiper > .swiper.s-wrapper .swiper-pagination .swiper-pagination-handle {\n  margin: 8px; }\n  .swiper-pagination-handle .swiper-pagination-bullet {\n  width: 15px;\n  height: 15px;\n  opacity: 1;\n  border: 2px solid #fff !important;\n  background: #fff; }\n  .swiper-pagination-handle .swiper-pagination-bullet-active {\n  background: transparent;\n  border: 2px solid #fff !important;\n  margin: 0 !important; }\n  input:-webkit-autofill {\n  -webkit-text-fill-color: #000 !important; }\n  input:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0 30px white inset; }\n  .mat-menu-panel {\n  width: 200px;\n  margin-top: 38px;\n  margin-left: -30px; }\n  .mat-elevation-z2 {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important; }\n  .mat-button-focus-overlay {\n  background-color: transparent !important; }\n  .mat-menu-panel button {\n  text-align: right;\n  font-size: 18px;\n  height: 30px;\n  line-height: 1;\n  padding: 0 20px;\n  font-family: 'Open Sans Hebrew', sans-serif; }\n  .mat-menu-content {\n  padding: 10px 0 !important; }\n  .mat-input-wrapper,\n.bg-button {\n  border-radius: 12px;\n  margin-bottom: 26px;\n  font-weight: 100;\n  font-size: 18px;\n  height: 50px; }\n  .mat-form-field-infix {\n  border: 0;\n  height: 50px;\n  line-height: 1.8;\n  padding-right: 10px; }\n  .mat-form-field {\n  max-width: 100%;\n  width: 100%; }\n  .mat-input-wrapper {\n  background: #fff;\n  color: #757575;\n  text-align: right;\n  padding-right: 30px; }\n  .mat-form-field-suffix {\n  position: absolute;\n  border-radius: 0;\n  width: 100%;\n  height: 100%; }\n  .mat-datepicker-toggle .mat-icon-button {\n  width: 100%;\n  height: 100%;\n  text-align: right;\n  padding-right: 10px; }\n  .mat-select-value {\n  padding-right: 24px; }\n  .mat-select-arrow-wrapper {\n  position: relative;\n  right: -12px; }\n  .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #733071; }\n  .mat-form-field-underline {\n  display: none; }\n  .mat-select-panel .mat-optgroup-label, .mat-select-panel .mat-option {\n  height: 50px; }\n  .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  margin-top: -8px;\n  line-height: 2;\n  color: #000; }\n  .bg-button {\n  color: #fff !important;\n  border-radius: 12px;\n  width: 100%;\n  font-size: 22px;\n  height: 50px;\n  background: -webkit-gradient(linear, left top, right top, from(#512e7f), color-stop(80%, #a5196a), to(#a5196a));\n  background: linear-gradient(to right, #512e7f 0%, #a5196a 80%, #a5196a 100%); }\n  .bg-button.bg-green-button {\n  background: #019b94;\n  max-width: 260px;\n  margin: 0 auto;\n  display: block; }\n  .bg-button.bg-orange-button {\n  background: #fcb30e;\n  margin: 0 auto;\n  margin: 20px auto;\n  display: block;\n  width: 180px; }\n  .mat-checkbox-inner-container,\n.mat-checkbox-frame {\n  width: 20px !important;\n  height: 20px !important;\n  border-radius: 5px !important;\n  padding-left: 10px; }\n  .mat-checkbox {\n  color: #000;\n  font-size: 20px !important;\n  font-weight: 200 !important; }\n  .mat-checkbox-layout {\n  width: 100% !important; }\n  .mat-checkbox-layout .mat-checkbox-label {\n  width: 100%;\n  text-align: right;\n  white-space: pre-line; }\n  .mat-checkbox-checked.mat-accent .mat-checkbox-background,\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background {\n  background: #019b94;\n  border-radius: 5px; }\n  .mat-form-field-hint-wrapper {\n  margin-top: 20px; }\n  .mat-tooltip-panel {\n  border-radius: 10px; }\n  .mat-tooltip {\n  background-color: #019b94;\n  font-size: 12px;\n  border-radius: 10px;\n  padding: 10px 20px !important;\n  font-weight: 200;\n  max-width: 310px !important; }\n  @media screen and (-ms-high-contrast: active) {\n  .mat-tooltip {\n    outline: solid 0px; } }\n  .mat-tooltip-handset {\n  margin: 24px;\n  padding-left: 16px;\n  padding-right: 16px; }\n  .example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .example-container > * {\n  width: 100%; }\n  .example-right-align {\n  text-align: right; }\n  input::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  display: none; }\n  input {\n  -moz-appearance: textfield; }\n  button {\n  -webkit-transition: opacity 1s;\n  transition: opacity 1s; }\n  button:disabled {\n  opacity: .5; }\n  /* Large devices (large desktops, 1200px and up) */\n  @media only screen and (max-width: 1200px) {\n  #page-banner .banner-content .banner-text {\n    font-size: 80px;\n    max-width: 400px; } }\n  /* Medium devices (desktops, 992px and up) */\n  /* Small devices (tablets, 768px and up) */\n  #page-banner {\n  -webkit-box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n          box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n  position: relative;\n  z-index: 4; }\n  #page-banner .banner-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    height: 605px;\n    overflow: hidden;\n    position: relative; }\n  #page-banner .banner-content img {\n      width: 100%;\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover;\n      position: absolute;\n      z-index: 0;\n      cursor: pointer; }\n  #page-banner .banner-content .banner-text {\n      text-align: right;\n      position: relative;\n      color: rgba(119, 38, 112, 0.902);\n      font-size: 134px;\n      max-width: 745px;\n      font-weight: 900;\n      margin-left: auto;\n      line-height: 1;\n      cursor: pointer; }\n  #page-banner .hedline {\n    height: 70px;\n    background: #512e7f;\n    background: -webkit-gradient(linear, left top, right top, from(#512e7f), color-stop(80%, #a5196a), to(#a5196a));\n    background: linear-gradient(to right, #512e7f 0%, #a5196a 80%, #a5196a 100%);\n    color: #fff; }\n  #page-banner .hedline h1 {\n      font-weight: 900; }\n  /* Small devices (tablets, 768px and up) */\n  @media only screen and (max-width: 768px) {\n  #page-banner .banner-content {\n    height: 400px; }\n    #page-banner .banner-content .banner-text {\n      font-size: 40px;\n      max-width: 220px; }\n  #page-banner .hedline {\n    height: 100px; }\n    #page-banner .hedline h1 {\n      font-weight: bold; } }\n"

/***/ }),

/***/ "./src/app/banner/banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
        this.urlImage = './assets/img/page-banner.jpg';
        this.bannerText = 'סים אחד לכל החיים';
        // headline
        this.headlineTitle = 'בחירת כרטיס סים';
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-banner',
            template: __webpack_require__("./src/app/banner/banner.component.html"),
            styles: [__webpack_require__("./src/app/banner/banner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/client-info/client-info.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"client-info\" class=\"gradient-background\">\n\t<div class=\"container\">\n\t\t<h1>פרטי לקוח</h1>\n\t\t<form #clientInfoForm=\"ngForm\" (ngSubmit)=\"onSubmit(clientInfoForm)\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput required placeholder=\"שם משפחה\" name=\"soname\" ngModel />\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput required placeholder=\"שם פרטי\" name=\"name\" ngModel />\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput name=\"email\" placeholder=\"דוא״ל לקבלת חשבונית\"\n\t\t\t\t\t\trequired\n\t\t\t\t\t\t[pattern]=\"emailPattern\"\n\t\t\t\t\t\tngModel/>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput required placeholder=\"טלפון נייד\" name=\"tel\" \n\t\t\t\t\t\t(keypress)=\"numberTel_keyPress($event)\"\n\t\t\t\t\t\tngModel />\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-12 checked-wrapper\">\n\t\t\t\t\t<mat-checkbox name=\"checked\" [ngModel]=\"isChecked\">מאשר קבלת דיוור למייל</mat-checkbox>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t<button mat-button class=\"bg-button bg-green-button\" \n\t\t\t\t\t[disabled]=\"!clientInfoForm.valid\"\n\t\t\t\t\t(click)=\"scrollAnimate(simactiveform)\"\n\t\t\t\t\t(click)=\"isShow='show'\">המשך</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<!--  -->\n<!-- <pre>{{ formSimData | json }}</pre> -->\n<!--  -->\n\n\n\n<div [@toggleHeight]=\"isShow\" #simactiveform>\n\t<app-sim-active-form\n\t\t[clientInfoFormData]=\"clientInfoForm.value\">\n\t</app-sim-active-form>\n</div>"

/***/ }),

/***/ "./src/app/client-info/client-info.component.scss":
/***/ (function(module, exports) {

module.exports = ".gradient-background {\n  background: -webkit-gradient(linear, left top, right top, from(#512e7f), color-stop(80%, #a5196a), to(#a5196a));\n  background: linear-gradient(to right, #512e7f 0%, #a5196a 80%, #a5196a 100%); }\n  .gradient-background .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n    color: #fff; }\n  .gray-background {\n  background: #f1f1f1; }\n  h1, h2, h3, h4, h5, h6 {\n  margin: 10px 0; }\n  h1 {\n  font-size: 26px;\n  font-weight: 900; }\n  h2 {\n  font-size: 20px; }\n  h3 {\n  font-size: 18px; }\n  label {\n  font-weight: 400; }\n  .hedline {\n  text-align: center;\n  -webkit-box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n          box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-height: -webkit-max-content;\n  min-height: -moz-max-content;\n  min-height: max-content; }\n  .hedline h1 {\n    font-weight: 900; }\n  a {\n  color: #000; }\n  a:hover {\n  text-decoration: none; }\n  swiper > .swiper.s-wrapper .swiper-pagination .swiper-pagination-handle {\n  margin: 8px; }\n  .swiper-pagination-handle .swiper-pagination-bullet {\n  width: 15px;\n  height: 15px;\n  opacity: 1;\n  border: 2px solid #fff !important;\n  background: #fff; }\n  .swiper-pagination-handle .swiper-pagination-bullet-active {\n  background: transparent;\n  border: 2px solid #fff !important;\n  margin: 0 !important; }\n  input:-webkit-autofill {\n  -webkit-text-fill-color: #000 !important; }\n  input:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0 30px white inset; }\n  .mat-menu-panel {\n  width: 200px;\n  margin-top: 38px;\n  margin-left: -30px; }\n  .mat-elevation-z2 {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important; }\n  .mat-button-focus-overlay {\n  background-color: transparent !important; }\n  .mat-menu-panel button {\n  text-align: right;\n  font-size: 18px;\n  height: 30px;\n  line-height: 1;\n  padding: 0 20px;\n  font-family: 'Open Sans Hebrew', sans-serif; }\n  .mat-menu-content {\n  padding: 10px 0 !important; }\n  .mat-input-wrapper,\n.bg-button {\n  border-radius: 12px;\n  margin-bottom: 26px;\n  font-weight: 100;\n  font-size: 18px;\n  height: 50px; }\n  .mat-form-field-infix {\n  border: 0;\n  height: 50px;\n  line-height: 1.8;\n  padding-right: 10px; }\n  .mat-form-field {\n  max-width: 100%;\n  width: 100%; }\n  .mat-input-wrapper {\n  background: #fff;\n  color: #757575;\n  text-align: right;\n  padding-right: 30px; }\n  .mat-form-field-suffix {\n  position: absolute;\n  border-radius: 0;\n  width: 100%;\n  height: 100%; }\n  .mat-datepicker-toggle .mat-icon-button {\n  width: 100%;\n  height: 100%;\n  text-align: right;\n  padding-right: 10px; }\n  .mat-select-value {\n  padding-right: 24px; }\n  .mat-select-arrow-wrapper {\n  position: relative;\n  right: -12px; }\n  .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #733071; }\n  .mat-form-field-underline {\n  display: none; }\n  .mat-select-panel .mat-optgroup-label, .mat-select-panel .mat-option {\n  height: 50px; }\n  .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  margin-top: -8px;\n  line-height: 2;\n  color: #000; }\n  .bg-button {\n  color: #fff !important;\n  border-radius: 12px;\n  width: 100%;\n  font-size: 22px;\n  height: 50px;\n  background: -webkit-gradient(linear, left top, right top, from(#512e7f), color-stop(80%, #a5196a), to(#a5196a));\n  background: linear-gradient(to right, #512e7f 0%, #a5196a 80%, #a5196a 100%); }\n  .bg-button.bg-green-button {\n  background: #019b94;\n  max-width: 260px;\n  margin: 0 auto;\n  display: block; }\n  .bg-button.bg-orange-button {\n  background: #fcb30e;\n  margin: 0 auto;\n  margin: 20px auto;\n  display: block;\n  width: 180px; }\n  .mat-checkbox-inner-container,\n.mat-checkbox-frame {\n  width: 20px !important;\n  height: 20px !important;\n  border-radius: 5px !important;\n  padding-left: 10px; }\n  .mat-checkbox {\n  color: #000;\n  font-size: 20px !important;\n  font-weight: 200 !important; }\n  .mat-checkbox-layout {\n  width: 100% !important; }\n  .mat-checkbox-layout .mat-checkbox-label {\n  width: 100%;\n  text-align: right;\n  white-space: pre-line; }\n  .mat-checkbox-checked.mat-accent .mat-checkbox-background,\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background {\n  background: #019b94;\n  border-radius: 5px; }\n  .mat-form-field-hint-wrapper {\n  margin-top: 20px; }\n  .mat-tooltip-panel {\n  border-radius: 10px; }\n  .mat-tooltip {\n  background-color: #019b94;\n  font-size: 12px;\n  border-radius: 10px;\n  padding: 10px 20px !important;\n  font-weight: 200;\n  max-width: 310px !important; }\n  @media screen and (-ms-high-contrast: active) {\n  .mat-tooltip {\n    outline: solid 0px; } }\n  .mat-tooltip-handset {\n  margin: 24px;\n  padding-left: 16px;\n  padding-right: 16px; }\n  .example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .example-container > * {\n  width: 100%; }\n  .example-right-align {\n  text-align: right; }\n  input::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  display: none; }\n  input {\n  -moz-appearance: textfield; }\n  button {\n  -webkit-transition: opacity 1s;\n  transition: opacity 1s; }\n  button:disabled {\n  opacity: .5; }\n  /* Large devices (large desktops, 1200px and up) */\n  @media only screen and (max-width: 1200px) {\n  #page-banner .banner-content .banner-text {\n    font-size: 80px;\n    max-width: 400px; } }\n  /* Medium devices (desktops, 992px and up) */\n  /* Small devices (tablets, 768px and up) */\n  #client-info h1 {\n  text-align: center;\n  margin-top: 40px;\n  color: #fff;\n  margin-bottom: 50px; }\n  #client-info .bg-button {\n  margin-top: 10px;\n  margin-bottom: 80px; }\n  #client-info .checked-wrapper {\n  color: #fff;\n  position: absolute;\n  z-index: 1;\n  margin-top: 10px;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  right: 0; }\n  #client-info .checked-wrapper .mat-checkbox-label {\n    color: #fff;\n    font-size: 18px;\n    line-height: 2.413; }\n  #client-info #my-select .mat-checkbox-label {\n  color: #fff !important; }\n  /* Medium devices (desktops, 992px and up) */\n  @media only screen and (max-width: 992px) {\n  #client-info .checked-wrapper {\n    position: static;\n    width: 100%;\n    text-align: right; } }\n"

/***/ }),

/***/ "./src/app/client-info/client-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation__ = __webpack_require__("./src/app/animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientInfoComponent = /** @class */ (function () {
    function ClientInfoComponent() {
        this.emailPattern = "[^ @]*@[^ @]*";
        this.isChecked = false;
        // show animation
        this.isShow = 'hide';
    }
    ClientInfoComponent.prototype.numberTel_keyPress = function (event) {
        var pattern = /[0-9/+/ /(/)/]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    };
    ClientInfoComponent.prototype.onSubmit = function (clientInfoForm) {
        this.isShow = 'show';
        console.log(this.isShow);
    };
    // scroll animate
    ClientInfoComponent.prototype.scrollAnimate = function (element) {
        setTimeout(function () {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 250);
    };
    ClientInfoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ClientInfoComponent.prototype, "formSimData", void 0);
    ClientInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-client-info',
            template: __webpack_require__("./src/app/client-info/client-info.component.html"),
            animations: [
                __WEBPACK_IMPORTED_MODULE_1__animation__["a" /* toggleHeight */]
            ],
            styles: [__webpack_require__("./src/app/client-info/client-info.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], ClientInfoComponent);
    return ClientInfoComponent;
}());



/***/ }),

/***/ "./src/app/details-form/details-form.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"details-form\">\n\n\t<div class=\"hedline\">\n\t\t<div class=\"container\">\n\t\t\t<h1>...רוצים לשמוע עוד</h1>\n\t\t\t<h3>השאירו פרטים ונציגנו יחזרו אליכם בהקדם</h3>\n\t\t</div>\n\t</div>\n\n\t<div class=\"container\">\n\t\t\n\t\t<form #detailsForm=\"ngForm\" (ngSubmit)=\"onSubmit(detailsForm)\" class=\"form\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput required placeholder=\"טלפון\" name=\"tel\" \n\t\t\t\t\t\t(keypress)=\"numberTel_keyPress($event)\"\n\t\t\t\t\t\tngModel />\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput name=\"email\" placeholder=\"דוא״ל\"\n\t\t\t\t\t\trequired\n\t\t\t\t\t\t[pattern]=\"emailPattern\"\n\t\t\t\t\t\tngModel/>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput required placeholder=\"שם מלא\" name=\"name\" ngModel />\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t<button mat-button class=\"bg-button\" \n\t\t\t\t\t[disabled]=\"!detailsForm.valid\">המשך</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n\n</section>"

/***/ }),

/***/ "./src/app/details-form/details-form.component.scss":
/***/ (function(module, exports) {

module.exports = ".gradient-background {\n  background: -webkit-gradient(linear, left top, right top, from(#512e7f), color-stop(80%, #a5196a), to(#a5196a));\n  background: linear-gradient(to right, #512e7f 0%, #a5196a 80%, #a5196a 100%); }\n  .gradient-background .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n    color: #fff; }\n  .gray-background {\n  background: #f1f1f1; }\n  h1, h2, h3, h4, h5, h6 {\n  margin: 10px 0; }\n  h1 {\n  font-size: 26px;\n  font-weight: 900; }\n  h2 {\n  font-size: 20px; }\n  h3 {\n  font-size: 18px; }\n  label {\n  font-weight: 400; }\n  .hedline {\n  text-align: center;\n  -webkit-box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n          box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-height: -webkit-max-content;\n  min-height: -moz-max-content;\n  min-height: max-content; }\n  .hedline h1 {\n    font-weight: 900; }\n  a {\n  color: #000; }\n  a:hover {\n  text-decoration: none; }\n  swiper > .swiper.s-wrapper .swiper-pagination .swiper-pagination-handle {\n  margin: 8px; }\n  .swiper-pagination-handle .swiper-pagination-bullet {\n  width: 15px;\n  height: 15px;\n  opacity: 1;\n  border: 2px solid #fff !important;\n  background: #fff; }\n  .swiper-pagination-handle .swiper-pagination-bullet-active {\n  background: transparent;\n  border: 2px solid #fff !important;\n  margin: 0 !important; }\n  input:-webkit-autofill {\n  -webkit-text-fill-color: #000 !important; }\n  input:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0 30px white inset; }\n  .mat-menu-panel {\n  width: 200px;\n  margin-top: 38px;\n  margin-left: -30px; }\n  .mat-elevation-z2 {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important; }\n  .mat-button-focus-overlay {\n  background-color: transparent !important; }\n  .mat-menu-panel button {\n  text-align: right;\n  font-size: 18px;\n  height: 30px;\n  line-height: 1;\n  padding: 0 20px;\n  font-family: 'Open Sans Hebrew', sans-serif; }\n  .mat-menu-content {\n  padding: 10px 0 !important; }\n  .mat-input-wrapper,\n.bg-button {\n  border-radius: 12px;\n  margin-bottom: 26px;\n  font-weight: 100;\n  font-size: 18px;\n  height: 50px; }\n  .mat-form-field-infix {\n  border: 0;\n  height: 50px;\n  line-height: 1.8;\n  padding-right: 10px; }\n  .mat-form-field {\n  max-width: 100%;\n  width: 100%; }\n  .mat-input-wrapper {\n  background: #fff;\n  color: #757575;\n  text-align: right;\n  padding-right: 30px; }\n  .mat-form-field-suffix {\n  position: absolute;\n  border-radius: 0;\n  width: 100%;\n  height: 100%; }\n  .mat-datepicker-toggle .mat-icon-button {\n  width: 100%;\n  height: 100%;\n  text-align: right;\n  padding-right: 10px; }\n  .mat-select-value {\n  padding-right: 24px; }\n  .mat-select-arrow-wrapper {\n  position: relative;\n  right: -12px; }\n  .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #733071; }\n  .mat-form-field-underline {\n  display: none; }\n  .mat-select-panel .mat-optgroup-label, .mat-select-panel .mat-option {\n  height: 50px; }\n  .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  margin-top: -8px;\n  line-height: 2;\n  color: #000; }\n  .bg-button {\n  color: #fff !important;\n  border-radius: 12px;\n  width: 100%;\n  font-size: 22px;\n  height: 50px;\n  background: -webkit-gradient(linear, left top, right top, from(#512e7f), color-stop(80%, #a5196a), to(#a5196a));\n  background: linear-gradient(to right, #512e7f 0%, #a5196a 80%, #a5196a 100%); }\n  .bg-button.bg-green-button {\n  background: #019b94;\n  max-width: 260px;\n  margin: 0 auto;\n  display: block; }\n  .bg-button.bg-orange-button {\n  background: #fcb30e;\n  margin: 0 auto;\n  margin: 20px auto;\n  display: block;\n  width: 180px; }\n  .mat-checkbox-inner-container,\n.mat-checkbox-frame {\n  width: 20px !important;\n  height: 20px !important;\n  border-radius: 5px !important;\n  padding-left: 10px; }\n  .mat-checkbox {\n  color: #000;\n  font-size: 20px !important;\n  font-weight: 200 !important; }\n  .mat-checkbox-layout {\n  width: 100% !important; }\n  .mat-checkbox-layout .mat-checkbox-label {\n  width: 100%;\n  text-align: right;\n  white-space: pre-line; }\n  .mat-checkbox-checked.mat-accent .mat-checkbox-background,\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background {\n  background: #019b94;\n  border-radius: 5px; }\n  .mat-form-field-hint-wrapper {\n  margin-top: 20px; }\n  .mat-tooltip-panel {\n  border-radius: 10px; }\n  .mat-tooltip {\n  background-color: #019b94;\n  font-size: 12px;\n  border-radius: 10px;\n  padding: 10px 20px !important;\n  font-weight: 200;\n  max-width: 310px !important; }\n  @media screen and (-ms-high-contrast: active) {\n  .mat-tooltip {\n    outline: solid 0px; } }\n  .mat-tooltip-handset {\n  margin: 24px;\n  padding-left: 16px;\n  padding-right: 16px; }\n  .example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .example-container > * {\n  width: 100%; }\n  .example-right-align {\n  text-align: right; }\n  input::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  display: none; }\n  input {\n  -moz-appearance: textfield; }\n  button {\n  -webkit-transition: opacity 1s;\n  transition: opacity 1s; }\n  button:disabled {\n  opacity: .5; }\n  /* Large devices (large desktops, 1200px and up) */\n  @media only screen and (max-width: 1200px) {\n  #page-banner .banner-content .banner-text {\n    font-size: 80px;\n    max-width: 400px; } }\n  /* Medium devices (desktops, 992px and up) */\n  /* Small devices (tablets, 768px and up) */\n  #details-form {\n  background: #f1f1f1; }\n  #details-form .hedline {\n    background: linear-gradient(37deg, #fec80a 0%, #ed2b26 100%);\n    color: #fff;\n    height: 100px; }\n  #details-form .form {\n    padding-top: 30px;\n    padding-bottom: 60px; }\n  #details-form .form button {\n      max-width: 720px;\n      margin: 0 auto;\n      display: block; }\n  /* Small devices (tablets, 768px and up) */\n"

/***/ }),

/***/ "./src/app/details-form/details-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetailsFormComponent = /** @class */ (function () {
    function DetailsFormComponent() {
        this.emailPattern = "[^ @]*@[^ @]*";
    }
    DetailsFormComponent.prototype.numberTel_keyPress = function (event) {
        var pattern = /[0-9/+/ /(/)/]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    };
    DetailsFormComponent.prototype.onSubmit = function (detailsForm) {
        console.log(detailsForm.value);
    };
    DetailsFormComponent.prototype.ngOnInit = function () {
    };
    DetailsFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-details-form',
            template: __webpack_require__("./src/app/details-form/details-form.component.html"),
            styles: [__webpack_require__("./src/app/details-form/details-form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailsFormComponent);
    return DetailsFormComponent;
}());



/***/ }),

/***/ "./src/app/fly-form/fly-form.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"fly-form\" class=\"gray-background\">\n\t<div class=\"container\">\n\t\t<h1>לאן טסים?</h1>\n\t\t<h3>אנא בחרו את היעד המבוקש ותאריכי טיסה</h3>\n\t\t\n\t\t<form #flyForm=\"ngForm\" (ngSubmit)=\"onSubmit(flyForm)\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-12\">\n\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t    <mat-select placeholder=\"בחרו את העיד:\" \n\t\t\t\t\t    name=\"country\" \n\t\t\t\t\t    required \n\t\t\t\t\t    ngModel>\n\t\t\t\t\t    \t<mat-option value=\"{{ country['country'] }}\" \n\t\t\t\t\t    \t*ngFor=\"let country of countries\">\n\t\t\t\t\t    \t\t{{ country['country'] }}\n\t\t\t\t\t    \t</mat-option>\n\t\t\t\t\t    </mat-select>\n\t\t\t\t\t </mat-form-field>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"row inputs-date-fly-form\">\n\t\t\t\t\n\t\t\t\t<div *ngFor=\"let newDate of DateId\" class=\"col-sm-8  col-xs-12 inputs-load-wrap\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t<input matInput\n\t\t\t\t\t\t\t\t[matDatepicker]=\"picker2\"\n\t\t\t\t\t\t\t\t[min]=\"getObjectValue(flyForm.value, newDate['nameDate1'])\"\n\t\t\t\t\t\t\t\tplaceholder=\":בחרו תאריך המראה  \"\n\t\t\t\t\t\t\t\tname=\"{{ newDate['nameDate2'] }}\"\n\t\t\t\t\t\t\t\tngModel>\n\t\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n\t\t\t\t\t\t\t\t<mat-datepicker touchUi=\"true\" #picker2></mat-datepicker>\n\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t<input matInput \n\t\t\t\t\t\t\t\t [min]=\"minDate\" \n\t\t\t\t\t\t\t\t [max]=\"getObjectValue(flyForm.value, newDate['nameDate2'])\"\n\t\t\t\t\t\t\t\t [matDatepicker]=\"picker1\"\n\t\t\t\t\t\t\t\t placeholder=\":בחרו תאריך המראה  \"\n\t\t\t\t\t\t\t\t name=\"{{ newDate['nameDate1'] }}\"\n\t\t\t\t\t\t\t\t ngModel>\n\t\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n\t\t\t\t\t\t\t\t<mat-datepicker touchUi=\"true\" #picker1></mat-datepicker>\n\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-4 col-xs-12 button-load-inputs\">\n\t\t\t\t\t<button mat-button class=\"bg-button\" \n\t\t\t\t\t[disabled]=\"!flyForm.valid\"\n\t\t\t\t\t(click)=\"isShow='show'\" (click)=\"isHide='hide'\" (click)=\"scrollAnimate(appofferswrap)\">!יאללה ממריאים</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div id=\"add\" \n\t\t\t(click)=\"addDateInputs()\" \n\t\t\t*ngIf=\"index < 3\">נוסעים ליות מיעד אחד?  הוסף פרטי טיסה נוספת <span>+</span>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n\n<div [@toggleHeight]=\"isShow\" #appofferswrap>\n\t<app-offers></app-offers>\n</div>\n\n<div [@toggleHeight]=\"isHide\">\n\t<app-promotion></app-promotion>\n</div>"

/***/ }),

/***/ "./src/app/fly-form/fly-form.component.scss":
/***/ (function(module, exports) {

module.exports = ".gradient-background {\n  background: -webkit-gradient(linear, left top, right top, from(#512e7f), color-stop(80%, #a5196a), to(#a5196a));\n  background: linear-gradient(to right, #512e7f 0%, #a5196a 80%, #a5196a 100%); }\n  .gradient-background .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n    color: #fff; }\n  .gray-background {\n  background: #f1f1f1; }\n  h1, h2, h3, h4, h5, h6 {\n  margin: 10px 0; }\n  h1 {\n  font-size: 26px;\n  font-weight: 900; }\n  h2 {\n  font-size: 20px; }\n  h3 {\n  font-size: 18px; }\n  label {\n  font-weight: 400; }\n  .hedline {\n  text-align: center;\n  -webkit-box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n          box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-height: -webkit-max-content;\n  min-height: -moz-max-content;\n  min-height: max-content; }\n  .hedline h1 {\n    font-weight: 900; }\n  a {\n  color: #000; }\n  a:hover {\n  text-decoration: none; }\n  swiper > .swiper.s-wrapper .swiper-pagination .swiper-pagination-handle {\n  margin: 8px; }\n  .swiper-pagination-handle .swiper-pagination-bullet {\n  width: 15px;\n  height: 15px;\n  opacity: 1;\n  border: 2px solid #fff !important;\n  background: #fff; }\n  .swiper-pagination-handle .swiper-pagination-bullet-active {\n  background: transparent;\n  border: 2px solid #fff !important;\n  margin: 0 !important; }\n  input:-webkit-autofill {\n  -webkit-text-fill-color: #000 !important; }\n  input:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0 30px white inset; }\n  .mat-menu-panel {\n  width: 200px;\n  margin-top: 38px;\n  margin-left: -30px; }\n  .mat-elevation-z2 {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important; }\n  .mat-button-focus-overlay {\n  background-color: transparent !important; }\n  .mat-menu-panel button {\n  text-align: right;\n  font-size: 18px;\n  height: 30px;\n  line-height: 1;\n  padding: 0 20px;\n  font-family: 'Open Sans Hebrew', sans-serif; }\n  .mat-menu-content {\n  padding: 10px 0 !important; }\n  .mat-input-wrapper,\n.bg-button {\n  border-radius: 12px;\n  margin-bottom: 26px;\n  font-weight: 100;\n  font-size: 18px;\n  height: 50px; }\n  .mat-form-field-infix {\n  border: 0;\n  height: 50px;\n  line-height: 1.8;\n  padding-right: 10px; }\n  .mat-form-field {\n  max-width: 100%;\n  width: 100%; }\n  .mat-input-wrapper {\n  background: #fff;\n  color: #757575;\n  text-align: right;\n  padding-right: 30px; }\n  .mat-form-field-suffix {\n  position: absolute;\n  border-radius: 0;\n  width: 100%;\n  height: 100%; }\n  .mat-datepicker-toggle .mat-icon-button {\n  width: 100%;\n  height: 100%;\n  text-align: right;\n  padding-right: 10px; }\n  .mat-select-value {\n  padding-right: 24px; }\n  .mat-select-arrow-wrapper {\n  position: relative;\n  right: -12px; }\n  .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #733071; }\n  .mat-form-field-underline {\n  display: none; }\n  .mat-select-panel .mat-optgroup-label, .mat-select-panel .mat-option {\n  height: 50px; }\n  .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  margin-top: -8px;\n  line-height: 2;\n  color: #000; }\n  .bg-button {\n  color: #fff !important;\n  border-radius: 12px;\n  width: 100%;\n  font-size: 22px;\n  height: 50px;\n  background: -webkit-gradient(linear, left top, right top, from(#512e7f), color-stop(80%, #a5196a), to(#a5196a));\n  background: linear-gradient(to right, #512e7f 0%, #a5196a 80%, #a5196a 100%); }\n  .bg-button.bg-green-button {\n  background: #019b94;\n  max-width: 260px;\n  margin: 0 auto;\n  display: block; }\n  .bg-button.bg-orange-button {\n  background: #fcb30e;\n  margin: 0 auto;\n  margin: 20px auto;\n  display: block;\n  width: 180px; }\n  .mat-checkbox-inner-container,\n.mat-checkbox-frame {\n  width: 20px !important;\n  height: 20px !important;\n  border-radius: 5px !important;\n  padding-left: 10px; }\n  .mat-checkbox {\n  color: #000;\n  font-size: 20px !important;\n  font-weight: 200 !important; }\n  .mat-checkbox-layout {\n  width: 100% !important; }\n  .mat-checkbox-layout .mat-checkbox-label {\n  width: 100%;\n  text-align: right;\n  white-space: pre-line; }\n  .mat-checkbox-checked.mat-accent .mat-checkbox-background,\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background {\n  background: #019b94;\n  border-radius: 5px; }\n  .mat-form-field-hint-wrapper {\n  margin-top: 20px; }\n  .mat-tooltip-panel {\n  border-radius: 10px; }\n  .mat-tooltip {\n  background-color: #019b94;\n  font-size: 12px;\n  border-radius: 10px;\n  padding: 10px 20px !important;\n  font-weight: 200;\n  max-width: 310px !important; }\n  @media screen and (-ms-high-contrast: active) {\n  .mat-tooltip {\n    outline: solid 0px; } }\n  .mat-tooltip-handset {\n  margin: 24px;\n  padding-left: 16px;\n  padding-right: 16px; }\n  .example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .example-container > * {\n  width: 100%; }\n  .example-right-align {\n  text-align: right; }\n  input::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  display: none; }\n  input {\n  -moz-appearance: textfield; }\n  button {\n  -webkit-transition: opacity 1s;\n  transition: opacity 1s; }\n  button:disabled {\n  opacity: .5; }\n  /* Large devices (large desktops, 1200px and up) */\n  @media only screen and (max-width: 1200px) {\n  #page-banner .banner-content .banner-text {\n    font-size: 80px;\n    max-width: 400px; } }\n  /* Medium devices (desktops, 992px and up) */\n  /* Small devices (tablets, 768px and up) */\n  #fly-form {\n  padding-bottom: 50px; }\n  #fly-form h1 {\n    text-align: center;\n    margin-top: 50px;\n    color: #4a3082;\n    margin-bottom: 20px; }\n  #fly-form h3 {\n    text-align: center;\n    color: #404040;\n    margin-bottom: 30px; }\n  #fly-form .inputs-date-fly-form {\n    position: relative; }\n  #fly-form .inputs-date-fly-form .button-load-inputs {\n      position: absolute;\n      bottom: 0; }\n  #fly-form .inputs-date-fly-form .inputs-load-wrap {\n      float: right; }\n  #fly-form #add {\n    color: #404040;\n    text-align: right;\n    font-size: 18px;\n    cursor: pointer; }\n  #fly-form #add span {\n      background: #019b94;\n      border-radius: 6px;\n      text-align: center;\n      font-size: 24px;\n      line-height: 1;\n      width: 26px;\n      height: 26px;\n      color: #fff;\n      display: inline-block; }\n  /* Small devices (tablets, 768px and up) */\n  @media only screen and (max-width: 768px) {\n  #fly-form .inputs-date-fly-form .button-load-inputs {\n    position: static; }\n  #fly-form .inputs-date-fly-form .inputs-load-wrap {\n    float: none; }\n  #fly-form #add {\n    font-size: 18px; } }\n"

/***/ }),

/***/ "./src/app/fly-form/fly-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlyFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation__ = __webpack_require__("./src/app/animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlyFormComponent = /** @class */ (function () {
    function FlyFormComponent() {
        // select list
        this.countries = [
            { country: 'Israil' },
            { country: 'America' },
            { country: 'Canada' },
            { country: 'Israil' },
            { country: 'America' },
            { country: 'Canada' },
            { country: 'Israil' },
            { country: 'America' },
            { country: 'Canada' },
            { country: 'Israil' },
            { country: 'America' },
            { country: 'Canada' },
        ];
        // min date validation
        this.minDate = new Date(); //today
        // add new date inputs
        this.DateId = [
            { nameDate1: "dateLanding", nameDate2: "dateAppearance" },
        ];
        this.index = -1;
        // animate show and hide
        this.isShow = 'hide';
        this.isHide = 'show';
    }
    FlyFormComponent.prototype.daydiff = function (first, second) {
        return Math.round((second - first) / (1000 * 60 * 60 * 24));
    };
    // geyObject
    FlyFormComponent.prototype.getObjectValue = function (formObject, valueObject) {
        return formObject[valueObject];
    };
    FlyFormComponent.prototype.addDateInputs = function (newInputs) {
        if (this.index < 3) {
            newInputs = [
                { nameDate1: "dateLanding2", nameDate2: "dateAppearance2" },
                { nameDate1: "dateLanding3", nameDate2: "dateAppearance3" },
                { nameDate1: "dateLanding4", nameDate2: "dateAppearance4" },
                { nameDate1: "dateLanding5", nameDate2: "dateAppearance5" },
            ];
            this.index = this.index + 1;
            if (newInputs) {
                this.DateId.push(newInputs[this.index]);
            }
        }
    };
    // scroll animate
    FlyFormComponent.prototype.scrollAnimate = function (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    FlyFormComponent.prototype.onSubmit = function (flyForm) {
        this.isShow = 'show';
        this.isHide = 'hide';
    };
    FlyFormComponent.prototype.ngOnInit = function () {
    };
    FlyFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fly-form',
            template: __webpack_require__("./src/app/fly-form/fly-form.component.html"),
            animations: [
                __WEBPACK_IMPORTED_MODULE_1__animation__["a" /* toggleHeight */]
            ],
            styles: [__webpack_require__("./src/app/fly-form/fly-form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FlyFormComponent);
    return FlyFormComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n\t<div class=\"container\">\n\t\t<img src=\"./assets/img/logo.png\" alt=\"Bglobal\" class=\"logo\">\n\n\t\t<div href=\"#\" class=\"terms\">\n\t\t\t<span>מי אנחנו</span>\n\t\t\t<span>תקנון</span>\n\t\t\t<span>תנאי שימוש</span>      \n\t\t</div>\n\t\t<hr>\n\t\t<div class=\"footer-info\"> טלפון: <a href=\"tel:03-372-3030\">03-372-3030</a> | פקס: <a href=\"tel:09-746-2271\">09-746-2271</a> | רח׳ הפנינה 8, מגדל ב', קומה 3, רעננה 4321545 ישראל</div>\n\t</div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = ".gradient-background {\n  background: -webkit-gradient(linear, left top, right top, from(#512e7f), color-stop(80%, #a5196a), to(#a5196a));\n  background: linear-gradient(to right, #512e7f 0%, #a5196a 80%, #a5196a 100%); }\n  .gradient-background .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n    color: #fff; }\n  .gray-background {\n  background: #f1f1f1; }\n  h1, h2, h3, h4, h5, h6 {\n  margin: 10px 0; }\n  h1 {\n  font-size: 26px;\n  font-weight: 900; }\n  h2 {\n  font-size: 20px; }\n  h3 {\n  font-size: 18px; }\n  label {\n  font-weight: 400; }\n  .hedline {\n  text-align: center;\n  -webkit-box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n          box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-height: -webkit-max-content;\n  min-height: -moz-max-content;\n  min-height: max-content; }\n  .hedline h1 {\n    font-weight: 900; }\n  a {\n  color: #000; }\n  a:hover {\n  text-decoration: none; }\n  swiper > .swiper.s-wrapper .swiper-pagination .swiper-pagination-handle {\n  margin: 8px; }\n  .swiper-pagination-handle .swiper-pagination-bullet {\n  width: 15px;\n  height: 15px;\n  opacity: 1;\n  border: 2px solid #fff !important;\n  background: #fff; }\n  .swiper-pagination-handle .swiper-pagination-bullet-active {\n  background: transparent;\n  border: 2px solid #fff !important;\n  margin: 0 !important; }\n  input:-webkit-autofill {\n  -webkit-text-fill-color: #000 !important; }\n  input:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0 30px white inset; }\n  .mat-menu-panel {\n  width: 200px;\n  margin-top: 38px;\n  margin-left: -30px; }\n  .mat-elevation-z2 {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important; }\n  .mat-button-focus-overlay {\n  background-color: transparent !important; }\n  .mat-menu-panel button {\n  text-align: right;\n  font-size: 18px;\n  height: 30px;\n  line-height: 1;\n  padding: 0 20px;\n  font-family: 'Open Sans Hebrew', sans-serif; }\n  .mat-menu-content {\n  padding: 10px 0 !important; }\n  .mat-input-wrapper,\n.bg-button {\n  border-radius: 12px;\n  margin-bottom: 26px;\n  font-weight: 100;\n  font-size: 18px;\n  height: 50px; }\n  .mat-form-field-infix {\n  border: 0;\n  height: 50px;\n  line-height: 1.8;\n  padding-right: 10px; }\n  .mat-form-field {\n  max-width: 100%;\n  width: 100%; }\n  .mat-input-wrapper {\n  background: #fff;\n  color: #757575;\n  text-align: right;\n  padding-right: 30px; }\n  .mat-form-field-suffix {\n  position: absolute;\n  border-radius: 0;\n  width: 100%;\n  height: 100%; }\n  .mat-datepicker-toggle .mat-icon-button {\n  width: 100%;\n  height: 100%;\n  text-align: right;\n  padding-right: 10px; }\n  .mat-select-value {\n  padding-right: 24px; }\n  .mat-select-arrow-wrapper {\n  position: relative;\n  right: -12px; }\n  .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #733071; }\n  .mat-form-field-underline {\n  display: none; }\n  .mat-select-panel .mat-optgroup-label, .mat-select-panel .mat-option {\n  height: 50px; }\n  .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  margin-top: -8px;\n  line-height: 2;\n  color: #000; }\n  .bg-button {\n  color: #fff !important;\n  border-radius: 12px;\n  width: 100%;\n  font-size: 22px;\n  height: 50px;\n  background: -webkit-gradient(linear, left top, right top, from(#512e7f), color-stop(80%, #a5196a), to(#a5196a));\n  background: linear-gradient(to right, #512e7f 0%, #a5196a 80%, #a5196a 100%); }\n  .bg-button.bg-green-button {\n  background: #019b94;\n  max-width: 260px;\n  margin: 0 auto;\n  display: block; }\n  .bg-button.bg-orange-button {\n  background: #fcb30e;\n  margin: 0 auto;\n  margin: 20px auto;\n  display: block;\n  width: 180px; }\n  .mat-checkbox-inner-container,\n.mat-checkbox-frame {\n  width: 20px !important;\n  height: 20px !important;\n  border-radius: 5px !important;\n  padding-left: 10px; }\n  .mat-checkbox {\n  color: #000;\n  font-size: 20px !important;\n  font-weight: 200 !important; }\n  .mat-checkbox-layout {\n  width: 100% !important; }\n  .mat-checkbox-layout .mat-checkbox-label {\n  width: 100%;\n  text-align: right;\n  white-space: pre-line; }\n  .mat-checkbox-checked.mat-accent .mat-checkbox-background,\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background {\n  background: #019b94;\n  border-radius: 5px; }\n  .mat-form-field-hint-wrapper {\n  margin-top: 20px; }\n  .mat-tooltip-panel {\n  border-radius: 10px; }\n  .mat-tooltip {\n  background-color: #019b94;\n  font-size: 12px;\n  border-radius: 10px;\n  padding: 10px 20px !important;\n  font-weight: 200;\n  max-width: 310px !important; }\n  @media screen and (-ms-high-contrast: active) {\n  .mat-tooltip {\n    outline: solid 0px; } }\n  .mat-tooltip-handset {\n  margin: 24px;\n  padding-left: 16px;\n  padding-right: 16px; }\n  .example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .example-container > * {\n  width: 100%; }\n  .example-right-align {\n  text-align: right; }\n  input::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  display: none; }\n  input {\n  -moz-appearance: textfield; }\n  button {\n  -webkit-transition: opacity 1s;\n  transition: opacity 1s; }\n  button:disabled {\n  opacity: .5; }\n  /* Large devices (large desktops, 1200px and up) */\n  @media only screen and (max-width: 1200px) {\n  #page-banner .banner-content .banner-text {\n    font-size: 80px;\n    max-width: 400px; } }\n  /* Medium devices (desktops, 992px and up) */\n  /* Small devices (tablets, 768px and up) */\n  footer {\n  height: 380px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  footer img.logo {\n    max-width: 200px;\n    display: block;\n    margin: 0 auto;\n    margin-bottom: 30px; }\n  footer .terms {\n    color: #000;\n    font-size: 18px;\n    text-align: center;\n    font-weight: normal;\n    display: block;\n    width: 100%;\n    line-height: 1; }\n  footer .terms span {\n      padding: 0 42px;\n      cursor: pointer; }\n  footer hr {\n    max-width: 100%;\n    width: 1200px;\n    margin: 20px auto;\n    display: block;\n    border-color: #9d205e; }\n  footer .footer-info {\n    text-align: center;\n    color: #000;\n    font-size: 16px;\n    font-weight: normal; }\n  /* Small devices (tablets, 768px and up) */\n  @media only screen and (max-width: 768px) {\n  footer .terms span {\n    padding: 0 15px; } }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/form-sim/form-sim.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"form-sim\">\n\t<div class=\"container\">\n\t\t\n\t\t<form #formSim=\"ngForm\" (ngSubmit)=\"onSubmit(formSim)\">\n\t\t\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<h3>בחר בסים המבוקש</h3>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t    <mat-select placeholder=\"כרטיס סים כלשהו\" required name=\"SIM\" ngModel>\n\t\t\t\t\t\t    \t<mat-option value=\"{{ sim['value'] }}\" *ngFor=\"let sim of simcards\">{{ sim['value' ]}}</mat-option>\n\t\t\t\t\t\t    </mat-select>\n\t\t\t\t\t\t </mat-form-field>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<h3>מלא פרטי משווק</h3>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t<input matInput placeholder=\"כרטיס מועדון\" name=\"club-card\" ngModel/>\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t<input matInput required placeholder=\"נציג\" name=\"representative\" #representative ngModel/>\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t<input matInput required placeholder=\"סניף\" name=\"branch\" ngModel/>\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t<button type=\"submit\" mat-button class=\"bg-button bg-green-button\"\n\t\t\t\t\t [disabled]=\"!formSim.valid\" \n\t\t\t\t\t (click)=\"scrollAnimate(appClientInfo)\"\n\t\t\t\t\t (click)=\"isShow='show'\">המשך</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\n\t\t<!-- <pre>{{ formSim.valid | json }}</pre> -->\n\t\t<!-- <pre>{{ formSim.submitted | json }}</pre> -->\n\n\t</div>\n</section>\n\n<div [@toggleHeight]=\"isShow\" #appClientInfo>\n\t<app-client-info [formSimData]=\"formSim.value\">\n\t</app-client-info>\n</div>"

/***/ }),

/***/ "./src/app/form-sim/form-sim.component.scss":
/***/ (function(module, exports) {

module.exports = ".gradient-background {\n  background: -webkit-gradient(linear, left top, right top, from(#512e7f), color-stop(80%, #a5196a), to(#a5196a));\n  background: linear-gradient(to right, #512e7f 0%, #a5196a 80%, #a5196a 100%); }\n  .gradient-background .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n    color: #fff; }\n  .gray-background {\n  background: #f1f1f1; }\n  h1, h2, h3, h4, h5, h6 {\n  margin: 10px 0; }\n  h1 {\n  font-size: 26px;\n  font-weight: 900; }\n  h2 {\n  font-size: 20px; }\n  h3 {\n  font-size: 18px; }\n  label {\n  font-weight: 400; }\n  .hedline {\n  text-align: center;\n  -webkit-box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n          box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-height: -webkit-max-content;\n  min-height: -moz-max-content;\n  min-height: max-content; }\n  .hedline h1 {\n    font-weight: 900; }\n  a {\n  color: #000; }\n  a:hover {\n  text-decoration: none; }\n  swiper > .swiper.s-wrapper .swiper-pagination .swiper-pagination-handle {\n  margin: 8px; }\n  .swiper-pagination-handle .swiper-pagination-bullet {\n  width: 15px;\n  height: 15px;\n  opacity: 1;\n  border: 2px solid #fff !important;\n  background: #fff; }\n  .swiper-pagination-handle .swiper-pagination-bullet-active {\n  background: transparent;\n  border: 2px solid #fff !important;\n  margin: 0 !important; }\n  input:-webkit-autofill {\n  -webkit-text-fill-color: #000 !important; }\n  input:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0 30px white inset; }\n  .mat-menu-panel {\n  width: 200px;\n  margin-top: 38px;\n  margin-left: -30px; }\n  .mat-elevation-z2 {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important; }\n  .mat-button-focus-overlay {\n  background-color: transparent !important; }\n  .mat-menu-panel button {\n  text-align: right;\n  font-size: 18px;\n  height: 30px;\n  line-height: 1;\n  padding: 0 20px;\n  font-family: 'Open Sans Hebrew', sans-serif; }\n  .mat-menu-content {\n  padding: 10px 0 !important; }\n  .mat-input-wrapper,\n.bg-button {\n  border-radius: 12px;\n  margin-bottom: 26px;\n  font-weight: 100;\n  font-size: 18px;\n  height: 50px; }\n  .mat-form-field-infix {\n  border: 0;\n  height: 50px;\n  line-height: 1.8;\n  padding-right: 10px; }\n  .mat-form-field {\n  max-width: 100%;\n  width: 100%; }\n  .mat-input-wrapper {\n  background: #fff;\n  color: #757575;\n  text-align: right;\n  padding-right: 30px; }\n  .mat-form-field-suffix {\n  position: absolute;\n  border-radius: 0;\n  width: 100%;\n  height: 100%; }\n  .mat-datepicker-toggle .mat-icon-button {\n  width: 100%;\n  height: 100%;\n  text-align: right;\n  padding-right: 10px; }\n  .mat-select-value {\n  padding-right: 24px; }\n  .mat-select-arrow-wrapper {\n  position: relative;\n  right: -12px; }\n  .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #733071; }\n  .mat-form-field-underline {\n  display: none; }\n  .mat-select-panel .mat-optgroup-label, .mat-select-panel .mat-option {\n  height: 50px; }\n  .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  margin-top: -8px;\n  line-height: 2;\n  color: #000; }\n  .bg-button {\n  color: #fff !important;\n  border-radius: 12px;\n  width: 100%;\n  font-size: 22px;\n  height: 50px;\n  background: -webkit-gradient(linear, left top, right top, from(#512e7f), color-stop(80%, #a5196a), to(#a5196a));\n  background: linear-gradient(to right, #512e7f 0%, #a5196a 80%, #a5196a 100%); }\n  .bg-button.bg-green-button {\n  background: #019b94;\n  max-width: 260px;\n  margin: 0 auto;\n  display: block; }\n  .bg-button.bg-orange-button {\n  background: #fcb30e;\n  margin: 0 auto;\n  margin: 20px auto;\n  display: block;\n  width: 180px; }\n  .mat-checkbox-inner-container,\n.mat-checkbox-frame {\n  width: 20px !important;\n  height: 20px !important;\n  border-radius: 5px !important;\n  padding-left: 10px; }\n  .mat-checkbox {\n  color: #000;\n  font-size: 20px !important;\n  font-weight: 200 !important; }\n  .mat-checkbox-layout {\n  width: 100% !important; }\n  .mat-checkbox-layout .mat-checkbox-label {\n  width: 100%;\n  text-align: right;\n  white-space: pre-line; }\n  .mat-checkbox-checked.mat-accent .mat-checkbox-background,\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background {\n  background: #019b94;\n  border-radius: 5px; }\n  .mat-form-field-hint-wrapper {\n  margin-top: 20px; }\n  .mat-tooltip-panel {\n  border-radius: 10px; }\n  .mat-tooltip {\n  background-color: #019b94;\n  font-size: 12px;\n  border-radius: 10px;\n  padding: 10px 20px !important;\n  font-weight: 200;\n  max-width: 310px !important; }\n  @media screen and (-ms-high-contrast: active) {\n  .mat-tooltip {\n    outline: solid 0px; } }\n  .mat-tooltip-handset {\n  margin: 24px;\n  padding-left: 16px;\n  padding-right: 16px; }\n  .example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .example-container > * {\n  width: 100%; }\n  .example-right-align {\n  text-align: right; }\n  input::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  display: none; }\n  input {\n  -moz-appearance: textfield; }\n  button {\n  -webkit-transition: opacity 1s;\n  transition: opacity 1s; }\n  button:disabled {\n  opacity: .5; }\n  /* Large devices (large desktops, 1200px and up) */\n  @media only screen and (max-width: 1200px) {\n  #page-banner .banner-content .banner-text {\n    font-size: 80px;\n    max-width: 400px; } }\n  /* Medium devices (desktops, 992px and up) */\n  /* Small devices (tablets, 768px and up) */\n  #form-sim {\n  padding-top: 100px; }\n  #form-sim h3 {\n    text-align: right;\n    margin-bottom: 20px; }\n  #form-sim .input-sim {\n    margin-bottom: 14px; }\n  #form-sim .bg-button {\n    margin-top: 35px;\n    margin-bottom: 98px; }\n  @media only screen and (max-width: 1920px) {\n  #form-sim h3 {\n    padding: 0 18px; } }\n  /* Large devices (large desktops, 1200px and up) */\n  /* Medium devices (desktops, 992px and up) */\n  /* Small devices (tablets, 768px and up) */\n  @media only screen and (max-width: 768px) {\n  #form-sim h3 {\n    padding: 0 15px; }\n  #form-sim .input-sim {\n    margin-bottom: -14px; } }\n"

/***/ }),

/***/ "./src/app/form-sim/form-sim.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormSimComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation__ = __webpack_require__("./src/app/animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormSimComponent = /** @class */ (function () {
    function FormSimComponent() {
        this.isShow = 'hide';
        this.simcards = [
            { value: 'כרטיס סים כלשהו' },
            { value: 'כרטיס סים כלשהו' },
            { value: 'כרטיס סים כלשהו' }
        ];
    }
    FormSimComponent.prototype.onSubmit = function (formSim) {
        if (formSim.valid && formSim.submitted) {
            this.isShow = 'show';
        }
    };
    // scroll animate
    FormSimComponent.prototype.scrollAnimate = function (element) {
        setTimeout(function () {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 250);
    };
    FormSimComponent.prototype.ngOnInit = function () {
    };
    FormSimComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-form-sim',
            template: __webpack_require__("./src/app/form-sim/form-sim.component.html"),
            animations: [
                __WEBPACK_IMPORTED_MODULE_1__animation__["a" /* toggleHeight */]
            ],
            styles: [__webpack_require__("./src/app/form-sim/form-sim.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FormSimComponent);
    return FormSimComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header >\n\t<div class=\"container\">\n\t\t<img routerLink=\"/\" src=\"./assets/img/logo.png\" alt=\"Bglobal\" class=\"logo\">\n\n\t\t<!-- mobile sandwich -->\n\t\t<div id=\"sandwich\"\n\t\t (click)=\"clickSendwich()\" \n\t\t [ngClass]=\"status ? 'active' : '' \">\n\t\t\t<div class=\"sw sw-topper\"></div>\n\t\t\t<div class=\"sw sw-bottom\"></div>\n\t\t\t<div class=\"sw sw-footer\"></div>\n\t\t</div>\n\n\t\t<div id=\"main-menu\" \n\t\t (click)=\"clickSendwich()\" \n\t\t [ngClass]=\"status ? 'active' : '' \">\n\t\t\t\n\t\t\t<button mat-button class=\"main-manu-item\"\n\t\t\t[matMenuTriggerFor]=\"logInMenu\" \n\t\t\t(mouseenter)=\"openMenu()\" \n\t\t\t#notificationMenuBtn>\n\t\t\t\t<a routerLink=\"/\" id=\"sign-in\">כניסה למנויים <i class=\"fa fa-user-o\" aria-hidden=\"true\"></i></a>\n\t\t\t</button>\n\t\t\t\n\t\t\t<mat-menu #logInMenu=\"matMenu\">\n\t\t\t  <button mat-menu-item>כרטיס סים שלי</button>\n\t\t\t  <button mat-menu-item>מצב החבילה עדכני</button>\n\t\t\t  <button mat-menu-item>פרטים אישיים</button>\n\t\t\t  <button mat-menu-item>יציאה</button>\n\t\t\t</mat-menu>\n\n\t\t\t<a routerLink=\"/sim-order\" class=\"main-manu-item\">צור קשר</a>\n\t\t\t<a routerLink=\"/\" class=\"main-manu-item\">הפעלת/טעינת כרטיס</a>\n\t\t\t<a routerLink=\"/\" class=\"main-manu-item\">שאלות נפוצות</a>\n\t\t\t<a routerLink=\"/\" class=\"main-manu-item\">רשימת מדינות נתמכות</a>\n\t\t\t<a routerLink=\"/\" class=\"main-manu-item bold\">דף הבית</a>\n\t\t</div>\n\t</div>\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ".gradient-background {\n  background: -webkit-gradient(linear, left top, right top, from(#512e7f), color-stop(80%, #a5196a), to(#a5196a));\n  background: linear-gradient(to right, #512e7f 0%, #a5196a 80%, #a5196a 100%); }\n  .gradient-background .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n    color: #fff; }\n  .gray-background {\n  background: #f1f1f1; }\n  h1, h2, h3, h4, h5, h6 {\n  margin: 10px 0; }\n  h1 {\n  font-size: 26px;\n  font-weight: 900; }\n  h2 {\n  font-size: 20px; }\n  h3 {\n  font-size: 18px; }\n  label {\n  font-weight: 400; }\n  .hedline {\n  text-align: center;\n  -webkit-box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n          box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-height: -webkit-max-content;\n  min-height: -moz-max-content;\n  min-height: max-content; }\n  .hedline h1 {\n    font-weight: 900; }\n  a {\n  color: #000; }\n  a:hover {\n  text-decoration: none; }\n  swiper > .swiper.s-wrapper .swiper-pagination .swiper-pagination-handle {\n  margin: 8px; }\n  .swiper-pagination-handle .swiper-pagination-bullet {\n  width: 15px;\n  height: 15px;\n  opacity: 1;\n  border: 2px solid #fff !important;\n  background: #fff; }\n  .swiper-pagination-handle .swiper-pagination-bullet-active {\n  background: transparent;\n  border: 2px solid #fff !important;\n  margin: 0 !important; }\n  input:-webkit-autofill {\n  -webkit-text-fill-color: #000 !important; }\n  input:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0 30px white inset; }\n  .mat-menu-panel {\n  width: 200px;\n  margin-top: 38px;\n  margin-left: -30px; }\n  .mat-elevation-z2 {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important; }\n  .mat-button-focus-overlay {\n  background-color: transparent !important; }\n  .mat-menu-panel button {\n  text-align: right;\n  font-size: 18px;\n  height: 30px;\n  line-height: 1;\n  padding: 0 20px;\n  font-family: 'Open Sans Hebrew', sans-serif; }\n  .mat-menu-content {\n  padding: 10px 0 !important; }\n  .mat-input-wrapper,\n.bg-button {\n  border-radius: 12px;\n  margin-bottom: 26px;\n  font-weight: 100;\n  font-size: 18px;\n  height: 50px; }\n  .mat-form-field-infix {\n  border: 0;\n  height: 50px;\n  line-height: 1.8;\n  padding-right: 10px; }\n  .mat-form-field {\n  max-width: 100%;\n  width: 100%; }\n  .mat-input-wrapper {\n  background: #fff;\n  color: #757575;\n  text-align: right;\n  padding-right: 30px; }\n  .mat-form-field-suffix {\n  position: absolute;\n  border-radius: 0;\n  width: 100%;\n  height: 100%; }\n  .mat-datepicker-toggle .mat-icon-button {\n  width: 100%;\n  height: 100%;\n  text-align: right;\n  padding-right: 10px; }\n  .mat-select-value {\n  padding-right: 24px; }\n  .mat-select-arrow-wrapper {\n  position: relative;\n  right: -12px; }\n  .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #733071; }\n  .mat-form-field-underline {\n  display: none; }\n  .mat-select-panel .mat-optgroup-label, .mat-select-panel .mat-option {\n  height: 50px; }\n  .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  margin-top: -8px;\n  line-height: 2;\n  color: #000; }\n  .bg-button {\n  color: #fff !important;\n  border-radius: 12px;\n  width: 100%;\n  font-size: 22px;\n  height: 50px;\n  background: -webkit-gradient(linear, left top, right top, from(#512e7f), color-stop(80%, #a5196a), to(#a5196a));\n  background: linear-gradient(to right, #512e7f 0%, #a5196a 80%, #a5196a 100%); }\n  .bg-button.bg-green-button {\n  background: #019b94;\n  max-width: 260px;\n  margin: 0 auto;\n  display: block; }\n  .bg-button.bg-orange-button {\n  background: #fcb30e;\n  margin: 0 auto;\n  margin: 20px auto;\n  display: block;\n  width: 180px; }\n  .mat-checkbox-inner-container,\n.mat-checkbox-frame {\n  width: 20px !important;\n  height: 20px !important;\n  border-radius: 5px !important;\n  padding-left: 10px; }\n  .mat-checkbox {\n  color: #000;\n  font-size: 20px !important;\n  font-weight: 200 !important; }\n  .mat-checkbox-layout {\n  width: 100% !important; }\n  .mat-checkbox-layout .mat-checkbox-label {\n  width: 100%;\n  text-align: right;\n  white-space: pre-line; }\n  .mat-checkbox-checked.mat-accent .mat-checkbox-background,\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background {\n  background: #019b94;\n  border-radius: 5px; }\n  .mat-form-field-hint-wrapper {\n  margin-top: 20px; }\n  .mat-tooltip-panel {\n  border-radius: 10px; }\n  .mat-tooltip {\n  background-color: #019b94;\n  font-size: 12px;\n  border-radius: 10px;\n  padding: 10px 20px !important;\n  font-weight: 200;\n  max-width: 310px !important; }\n  @media screen and (-ms-high-contrast: active) {\n  .mat-tooltip {\n    outline: solid 0px; } }\n  .mat-tooltip-handset {\n  margin: 24px;\n  padding-left: 16px;\n  padding-right: 16px; }\n  .example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .example-container > * {\n  width: 100%; }\n  .example-right-align {\n  text-align: right; }\n  input::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  display: none; }\n  input {\n  -moz-appearance: textfield; }\n  button {\n  -webkit-transition: opacity 1s;\n  transition: opacity 1s; }\n  button:disabled {\n  opacity: .5; }\n  /* Large devices (large desktops, 1200px and up) */\n  @media only screen and (max-width: 1200px) {\n  #page-banner .banner-content .banner-text {\n    font-size: 80px;\n    max-width: 400px; } }\n  /* Medium devices (desktops, 992px and up) */\n  /* Small devices (tablets, 768px and up) */\n  header {\n  height: 90px;\n  background: #fff;\n  position: relative;\n  z-index: 5;\n  -webkit-box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n          box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25); }\n  header .logo {\n    display: inline;\n    width: -webkit-max-content;\n    width: -moz-max-content;\n    width: max-content;\n    max-width: 220px;\n    position: absolute;\n    cursor: pointer; }\n  header .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    height: 100%;\n    position: relative;\n    width: 90%; }\n  #main-menu {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  display: inline-block;\n  margin-left: auto;\n  padding-left: 300px;\n  max-width: 100%;\n  text-align: right; }\n  #main-menu .main-manu-item {\n    display: inline-block;\n    font-size: 18px;\n    margin-left: 16px; }\n  #main-menu .bold {\n    font-weight: 600; }\n  #main-menu #sign-in {\n    color: #733071;\n    padding-right: 20px;\n    font-family: 'Open Sans Hebrew', sans-serif; }\n  #main-menu #sign-in i {\n      color: #fff;\n      background: #9d205e;\n      border-radius: 50%;\n      font-size: 20px;\n      padding: 5px;\n      width: 33px;\n      height: 33px;\n      line-height: 1;\n      text-align: center; }\n  #sandwich {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  cursor: pointer;\n  display: none; }\n  #sandwich .sw {\n    background-color: #733071; }\n  #sandwich .sw-topper {\n    position: relative;\n    top: 0;\n    width: 50px;\n    height: 5px;\n    border: none;\n    border-radius: 4px 4px 4px 4px;\n    -webkit-transition: top 0.2s, -webkit-transform 0.5s;\n    transition: top 0.2s, -webkit-transform 0.5s;\n    transition: transform 0.5s, top 0.2s;\n    transition: transform 0.5s, top 0.2s, -webkit-transform 0.5s; }\n  #sandwich .sw-bottom {\n    position: relative;\n    width: 50px;\n    height: 5px;\n    top: 10px;\n    border: none;\n    border-radius: 4px 4px 4px 4px;\n    -webkit-transition: top 0.2s, -webkit-transform 0.5s;\n    transition: top 0.2s, -webkit-transform 0.5s;\n    transition: transform 0.5s, top 0.2s;\n    transition: transform 0.5s, top 0.2s, -webkit-transform 0.5s;\n    -webkit-transition-delay: 0.2s, 0s;\n            transition-delay: 0.2s, 0s; }\n  #sandwich .sw-footer {\n    position: relative;\n    width: 50px;\n    height: 5px;\n    top: 20px;\n    border: none;\n    border-radius: 4px 4px 4px 4px;\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s;\n    -webkit-transition-delay: 0.1s;\n            transition-delay: 0.1s; }\n  #sandwich.active .sw-topper {\n    top: 7.5px;\n    -webkit-transform: rotate(140deg);\n            transform: rotate(140deg); }\n  #sandwich.active .sw-bottom {\n    top: 2.5px;\n    -webkit-transform: rotate(-140deg);\n            transform: rotate(-140deg); }\n  #sandwich.active .sw-footer {\n    opacity: 0;\n    top: 0;\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  @media only screen and (max-width: 1320px) {\n  header .container {\n    width: 100%; } }\n  /* Large devices (large desktops, 1200px and up) */\n  @media only screen and (max-width: 1200px) {\n  #sandwich {\n    display: block;\n    z-index: 15;\n    line-height: 57px;\n    padding: 7px;\n    padding-right: 20px;\n    width: 75px;\n    -webkit-transform: scale(0.6);\n            transform: scale(0.6); }\n  header {\n    position: fixed;\n    width: 100%; }\n    header .logo {\n      float: right;\n      z-index: 10;\n      max-width: 150px; }\n    header .container {\n      width: 100%;\n      position: static; }\n  #main-menu {\n    width: 100%;\n    overflow: hidden;\n    background-color: #fff;\n    padding-left: 0;\n    position: absolute;\n    z-index: -1;\n    left: 0;\n    right: 0;\n    top: 0;\n    padding: 15px 20px;\n    padding-top: 80px;\n    -webkit-transition: all 1.4s;\n    transition: all 1.4s;\n    max-height: 0px; }\n    #main-menu.active {\n      max-height: 1000px;\n      z-index: 5; }\n    #main-menu .main-manu-item {\n      display: block;\n      font-size: 18px;\n      margin-left: auto;\n      margin-bottom: 20px;\n      margin-right: 0;\n      padding: 0; }\n    #main-menu #sign-in {\n      display: none;\n      color: #733071;\n      padding-right: 0;\n      margin-right: 0; }\n      #main-menu #sign-in i {\n        font-size: 20px;\n        padding: 5px;\n        width: 33px;\n        height: 33px;\n        line-height: 1; } }\n  /* Medium devices (desktops, 992px and up) */\n  /* Small devices (tablets, 768px and up) */\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material___ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { MatMenuModule } from '@angular/material/menu';

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        // header mobile menu
        this.status = false;
    }
    HeaderComponent.prototype.openMenu = function () {
        this.trigger.openMenu();
    };
    HeaderComponent.prototype.closeMenu = function () {
        this.trigger.closeMenu();
    };
    HeaderComponent.prototype.clickSendwich = function () {
        this.status = !this.status;
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material___["h" /* MatMenuTrigger */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material___["h" /* MatMenuTrigger */])
    ], HeaderComponent.prototype, "trigger", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/homa-page/homa-page.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Slider -->\n<app-home-slider></app-home-slider>\n\n<!-- Form -->\n<app-fly-form></app-fly-form>\n\n<!-- details-form -->\n<app-details-form></app-details-form>\n"

/***/ }),

/***/ "./src/app/homa-page/homa-page.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/homa-page/homa-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomaPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomaPageComponent = /** @class */ (function () {
    function HomaPageComponent() {
    }
    HomaPageComponent.prototype.ngOnInit = function () {
    };
    HomaPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-homa-page',
            template: __webpack_require__("./src/app/homa-page/homa-page.component.html"),
            styles: [__webpack_require__("./src/app/homa-page/homa-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomaPageComponent);
    return HomaPageComponent;
}());



/***/ }),

/***/ "./src/app/home-slider/home-slider.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"home-slider\">\n\t<!-- slider -->\n\t<swiper [config]=\"config\" [(index)]=\"index\" (slideChange)=\"textAnimate(selector='banner-text')\">\n\t\t<div class=\"swiper-slide\" *ngFor=\"let slide of sliderItems\">\n\t\t\t<img src=\"{{slide['url-image']}}\" alt=\"banner\">\n\t\t\t<div class=\"container\">\n\n\t\t\t\t<div class=\"banner-text\"\n\n\t\t\t\t>{{slide['text-slide']}}</div>\n\t\t\t</div>\n\t\t</div>\n\t</swiper><!-- #slider -->\n\n\t<div class=\"hedline\">\n\t\t<div class=\"container\">\n\t\t\t<h1>{{headlineTitle}}</h1>\n\t\t\t<h3>{{headlineSubTitle}}</h3>\n\t\t</div>\n\t</div>\n</section>\n\n\n"

/***/ }),

/***/ "./src/app/home-slider/home-slider.component.scss":
/***/ (function(module, exports) {

module.exports = ".gradient-background {\n  background: -webkit-gradient(linear, left top, right top, from(#512e7f), color-stop(80%, #a5196a), to(#a5196a));\n  background: linear-gradient(to right, #512e7f 0%, #a5196a 80%, #a5196a 100%); }\n  .gradient-background .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n    color: #fff; }\n  .gray-background {\n  background: #f1f1f1; }\n  h1, h2, h3, h4, h5, h6 {\n  margin: 10px 0; }\n  h1 {\n  font-size: 26px;\n  font-weight: 900; }\n  h2 {\n  font-size: 20px; }\n  h3 {\n  font-size: 18px; }\n  label {\n  font-weight: 400; }\n  .hedline {\n  text-align: center;\n  -webkit-box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n          box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-height: -webkit-max-content;\n  min-height: -moz-max-content;\n  min-height: max-content; }\n  .hedline h1 {\n    font-weight: 900; }\n  a {\n  color: #000; }\n  a:hover {\n  text-decoration: none; }\n  swiper > .swiper.s-wrapper .swiper-pagination .swiper-pagination-handle {\n  margin: 8px; }\n  .swiper-pagination-handle .swiper-pagination-bullet {\n  width: 15px;\n  height: 15px;\n  opacity: 1;\n  border: 2px solid #fff !important;\n  background: #fff; }\n  .swiper-pagination-handle .swiper-pagination-bullet-active {\n  background: transparent;\n  border: 2px solid #fff !important;\n  margin: 0 !important; }\n  input:-webkit-autofill {\n  -webkit-text-fill-color: #000 !important; }\n  input:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0 30px white inset; }\n  .mat-menu-panel {\n  width: 200px;\n  margin-top: 38px;\n  margin-left: -30px; }\n  .mat-elevation-z2 {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important; }\n  .mat-button-focus-overlay {\n  background-color: transparent !important; }\n  .mat-menu-panel button {\n  text-align: right;\n  font-size: 18px;\n  height: 30px;\n  line-height: 1;\n  padding: 0 20px;\n  font-family: 'Open Sans Hebrew', sans-serif; }\n  .mat-menu-content {\n  padding: 10px 0 !important; }\n  .mat-input-wrapper,\n.bg-button {\n  border-radius: 12px;\n  margin-bottom: 26px;\n  font-weight: 100;\n  font-size: 18px;\n  height: 50px; }\n  .mat-form-field-infix {\n  border: 0;\n  height: 50px;\n  line-height: 1.8;\n  padding-right: 10px; }\n  .mat-form-field {\n  max-width: 100%;\n  width: 100%; }\n  .mat-input-wrapper {\n  background: #fff;\n  color: #757575;\n  text-align: right;\n  padding-right: 30px; }\n  .mat-form-field-suffix {\n  position: absolute;\n  border-radius: 0;\n  width: 100%;\n  height: 100%; }\n  .mat-datepicker-toggle .mat-icon-button {\n  width: 100%;\n  height: 100%;\n  text-align: right;\n  padding-right: 10px; }\n  .mat-select-value {\n  padding-right: 24px; }\n  .mat-select-arrow-wrapper {\n  position: relative;\n  right: -12px; }\n  .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #733071; }\n  .mat-form-field-underline {\n  display: none; }\n  .mat-select-panel .mat-optgroup-label, .mat-select-panel .mat-option {\n  height: 50px; }\n  .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  margin-top: -8px;\n  line-height: 2;\n  color: #000; }\n  .bg-button {\n  color: #fff !important;\n  border-radius: 12px;\n  width: 100%;\n  font-size: 22px;\n  height: 50px;\n  background: -webkit-gradient(linear, left top, right top, from(#512e7f), color-stop(80%, #a5196a), to(#a5196a));\n  background: linear-gradient(to right, #512e7f 0%, #a5196a 80%, #a5196a 100%); }\n  .bg-button.bg-green-button {\n  background: #019b94;\n  max-width: 260px;\n  margin: 0 auto;\n  display: block; }\n  .bg-button.bg-orange-button {\n  background: #fcb30e;\n  margin: 0 auto;\n  margin: 20px auto;\n  display: block;\n  width: 180px; }\n  .mat-checkbox-inner-container,\n.mat-checkbox-frame {\n  width: 20px !important;\n  height: 20px !important;\n  border-radius: 5px !important;\n  padding-left: 10px; }\n  .mat-checkbox {\n  color: #000;\n  font-size: 20px !important;\n  font-weight: 200 !important; }\n  .mat-checkbox-layout {\n  width: 100% !important; }\n  .mat-checkbox-layout .mat-checkbox-label {\n  width: 100%;\n  text-align: right;\n  white-space: pre-line; }\n  .mat-checkbox-checked.mat-accent .mat-checkbox-background,\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background {\n  background: #019b94;\n  border-radius: 5px; }\n  .mat-form-field-hint-wrapper {\n  margin-top: 20px; }\n  .mat-tooltip-panel {\n  border-radius: 10px; }\n  .mat-tooltip {\n  background-color: #019b94;\n  font-size: 12px;\n  border-radius: 10px;\n  padding: 10px 20px !important;\n  font-weight: 200;\n  max-width: 310px !important; }\n  @media screen and (-ms-high-contrast: active) {\n  .mat-tooltip {\n    outline: solid 0px; } }\n  .mat-tooltip-handset {\n  margin: 24px;\n  padding-left: 16px;\n  padding-right: 16px; }\n  .example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .example-container > * {\n  width: 100%; }\n  .example-right-align {\n  text-align: right; }\n  input::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  display: none; }\n  input {\n  -moz-appearance: textfield; }\n  button {\n  -webkit-transition: opacity 1s;\n  transition: opacity 1s; }\n  button:disabled {\n  opacity: .5; }\n  /* Large devices (large desktops, 1200px and up) */\n  @media only screen and (max-width: 1200px) {\n  #page-banner .banner-content .banner-text {\n    font-size: 80px;\n    max-width: 400px; } }\n  /* Medium devices (desktops, 992px and up) */\n  /* Small devices (tablets, 768px and up) */\n  #home-slider {\n  -webkit-box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n          box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n  position: relative;\n  z-index: 4; }\n  #home-slider .swiper-slide {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    height: 730px;\n    overflow: hidden; }\n  #home-slider .swiper-slide img {\n      width: 100%;\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover;\n      position: absolute;\n      z-index: 0;\n      cursor: pointer; }\n  #home-slider .swiper-slide .banner-text {\n      text-align: right;\n      position: relative;\n      font-size: 160px;\n      color: rgba(119, 38, 112, 0.902);\n      max-width: 760px;\n      font-weight: 900;\n      margin-left: auto;\n      line-height: 1;\n      cursor: pointer; }\n  #home-slider .swiper-slide .slide-animate-text {\n      -webkit-animation: bounceInRight 2s;\n              animation: bounceInRight 2s; }\n  #home-slider .hedline {\n    background: #512e7f;\n    background: -webkit-gradient(linear, left top, right top, from(#512e7f), color-stop(80%, #a5196a), to(#a5196a));\n    background: linear-gradient(to right, #512e7f 0%, #a5196a 80%, #a5196a 100%);\n    color: #fff;\n    height: 100px; }\n  #home-slider .hedline h1 {\n      font-weight: 900; }\n  @-webkit-keyframes bounceInRight {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0); }\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0); }\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0); }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n  @keyframes bounceInRight {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0); }\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0); }\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0); }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n  /* Small devices (tablets, 768px and up) */\n  @media only screen and (max-width: 768px) {\n  #home-slider .swiper-slide {\n    height: 400px; }\n    #home-slider .swiper-slide .banner-text {\n      font-size: 40px;\n      max-width: 220px; }\n  #home-slider .hedline {\n    height: 100px; }\n    #home-slider .hedline h1 {\n      font-weight: bold; } }\n"

/***/ }),

/***/ "./src/app/home-slider/home-slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeSliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_swiper_wrapper__ = __webpack_require__("./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeSliderComponent = /** @class */ (function () {
    function HomeSliderComponent() {
        // slider config
        this.index = 0;
        this.config = {
            direction: 'horizontal',
            slidesPerView: 1,
            keyboard: false,
            mousewheel: false,
            scrollbar: false,
            navigation: false,
            pagination: true,
            effect: 'fade',
            autoplay: {
                delay: 60000,
            },
        };
        // slider content
        this.sliderItems = [
            { 'text-slide': 'סים אחד לכל החיים', 'url-image': './assets/img/banner.jpg' },
            { 'text-slide': '2 סים אחד לכל החיים', 'url-image': './assets/img/page-banner.jpg' },
            { 'text-slide': '3 סים אחד לכל החיים', 'url-image': './assets/img/banner.jpg' },
            { 'text-slide': '4 סים אחד לכל החיים', 'url-image': './assets/img/page-banner.jpg' },
        ];
        // headline
        this.headlineTitle = 'טסים לחו״ל?';
        this.headlineSubTitle = 'מזמינים מראש כרטיס SIM עם חבילת גלישה ונהנים מהמחיר הזול ביותר במעל 100 מדינות!';
    }
    HomeSliderComponent.prototype.textAnimate = function (selector) {
        var index = this.index;
        var selectors = document.getElementsByClassName(selector);
        for (var i = selectors.length - 1; i >= 0; i--) {
            selectors[i].classList.remove('slide-animate-text');
        }
        selectors[index].classList.add('slide-animate-text');
    };
    HomeSliderComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ngx_swiper_wrapper__["b" /* SwiperComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_swiper_wrapper__["b" /* SwiperComponent */])
    ], HomeSliderComponent.prototype, "componentRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ngx_swiper_wrapper__["c" /* SwiperDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_swiper_wrapper__["c" /* SwiperDirective */])
    ], HomeSliderComponent.prototype, "directiveRef", void 0);
    HomeSliderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-slider',
            template: __webpack_require__("./src/app/home-slider/home-slider.component.html"),
            styles: [__webpack_require__("./src/app/home-slider/home-slider.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeSliderComponent);
    return HomeSliderComponent;
}());



/***/ }),

/***/ "./src/app/offers/offers.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"offers\">\n\t<div class=\"container\">\n\t\t<h1>?טוסים לספרד</h1>\n\t\t<h3>אלה החבילות שהכי מתאימות לכם</h3>\n\t\t\n\t\t<div class=\"flex-center-bertical\">\n\t\t\t<!-- slider -->\n\t\t\t<swiper [config]=\"config\" [(index)]=\"index\">\n\t\t\t\t<div class=\"swiper-slide\" *ngFor=\"let slide of sliderItems\">\n\t\t\t\t\t<div class=\"slide-header\">\n\t\t\t\t\t\t<h1>{{ slide['title'] }}</h1>\n\t\t\t\t\t\t<h3>{{ slide['sub-title'] }}</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"slide-content\">\n\t\t\t\t\t\t<div class=\"price\">₪ {{ slide['price'] }}</div>\n\t\t\t\t\t\t<div class=\"days\">( {{ slide['days'] }} )</div>\n\t\t\t\t\t\t<div class=\"slide-content\">{{ slide['info'] }}</div>\n\t\t\t\t\t\t<button mat-button class=\"bg-button\">!הזמינו עכשיו  </button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</swiper><!-- #slider -->\n \n\n\t\t\t<div class=\"custome-navigate-slider\">\n\t\t\t\t<div class=\"back nav-arrow\" (click)=\"prevSlide(600)\">\n\t\t\t\t\t<i class=\"material-icons\">keyboard_arrow_left</i>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"next nav-arrow\" (click)=\"nextSlide(600)\">\n\t\t\t\t\t<i class=\"material-icons\">keyboard_arrow_right</i>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</section>"

/***/ }),

/***/ "./src/app/offers/offers.component.scss":
/***/ (function(module, exports) {

module.exports = ".gradient-background {\n  background: -webkit-gradient(linear, left top, right top, from(#512e7f), color-stop(80%, #a5196a), to(#a5196a));\n  background: linear-gradient(to right, #512e7f 0%, #a5196a 80%, #a5196a 100%); }\n  .gradient-background .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n    color: #fff; }\n  .gray-background {\n  background: #f1f1f1; }\n  h1, h2, h3, h4, h5, h6 {\n  margin: 10px 0; }\n  h1 {\n  font-size: 26px;\n  font-weight: 900; }\n  h2 {\n  font-size: 20px; }\n  h3 {\n  font-size: 18px; }\n  label {\n  font-weight: 400; }\n  .hedline {\n  text-align: center;\n  -webkit-box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n          box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-height: -webkit-max-content;\n  min-height: -moz-max-content;\n  min-height: max-content; }\n  .hedline h1 {\n    font-weight: 900; }\n  a {\n  color: #000; }\n  a:hover {\n  text-decoration: none; }\n  swiper > .swiper.s-wrapper .swiper-pagination .swiper-pagination-handle {\n  margin: 8px; }\n  .swiper-pagination-handle .swiper-pagination-bullet {\n  width: 15px;\n  height: 15px;\n  opacity: 1;\n  border: 2px solid #fff !important;\n  background: #fff; }\n  .swiper-pagination-handle .swiper-pagination-bullet-active {\n  background: transparent;\n  border: 2px solid #fff !important;\n  margin: 0 !important; }\n  input:-webkit-autofill {\n  -webkit-text-fill-color: #000 !important; }\n  input:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0 30px white inset; }\n  .mat-menu-panel {\n  width: 200px;\n  margin-top: 38px;\n  margin-left: -30px; }\n  .mat-elevation-z2 {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important; }\n  .mat-button-focus-overlay {\n  background-color: transparent !important; }\n  .mat-menu-panel button {\n  text-align: right;\n  font-size: 18px;\n  height: 30px;\n  line-height: 1;\n  padding: 0 20px;\n  font-family: 'Open Sans Hebrew', sans-serif; }\n  .mat-menu-content {\n  padding: 10px 0 !important; }\n  .mat-input-wrapper,\n.bg-button {\n  border-radius: 12px;\n  margin-bottom: 26px;\n  font-weight: 100;\n  font-size: 18px;\n  height: 50px; }\n  .mat-form-field-infix {\n  border: 0;\n  height: 50px;\n  line-height: 1.8;\n  padding-right: 10px; }\n  .mat-form-field {\n  max-width: 100%;\n  width: 100%; }\n  .mat-input-wrapper {\n  background: #fff;\n  color: #757575;\n  text-align: right;\n  padding-right: 30px; }\n  .mat-form-field-suffix {\n  position: absolute;\n  border-radius: 0;\n  width: 100%;\n  height: 100%; }\n  .mat-datepicker-toggle .mat-icon-button {\n  width: 100%;\n  height: 100%;\n  text-align: right;\n  padding-right: 10px; }\n  .mat-select-value {\n  padding-right: 24px; }\n  .mat-select-arrow-wrapper {\n  position: relative;\n  right: -12px; }\n  .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #733071; }\n  .mat-form-field-underline {\n  display: none; }\n  .mat-select-panel .mat-optgroup-label, .mat-select-panel .mat-option {\n  height: 50px; }\n  .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  margin-top: -8px;\n  line-height: 2;\n  color: #000; }\n  .bg-button {\n  color: #fff !important;\n  border-radius: 12px;\n  width: 100%;\n  font-size: 22px;\n  height: 50px;\n  background: -webkit-gradient(linear, left top, right top, from(#512e7f), color-stop(80%, #a5196a), to(#a5196a));\n  background: linear-gradient(to right, #512e7f 0%, #a5196a 80%, #a5196a 100%); }\n  .bg-button.bg-green-button {\n  background: #019b94;\n  max-width: 260px;\n  margin: 0 auto;\n  display: block; }\n  .bg-button.bg-orange-button {\n  background: #fcb30e;\n  margin: 0 auto;\n  margin: 20px auto;\n  display: block;\n  width: 180px; }\n  .mat-checkbox-inner-container,\n.mat-checkbox-frame {\n  width: 20px !important;\n  height: 20px !important;\n  border-radius: 5px !important;\n  padding-left: 10px; }\n  .mat-checkbox {\n  color: #000;\n  font-size: 20px !important;\n  font-weight: 200 !important; }\n  .mat-checkbox-layout {\n  width: 100% !important; }\n  .mat-checkbox-layout .mat-checkbox-label {\n  width: 100%;\n  text-align: right;\n  white-space: pre-line; }\n  .mat-checkbox-checked.mat-accent .mat-checkbox-background,\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background {\n  background: #019b94;\n  border-radius: 5px; }\n  .mat-form-field-hint-wrapper {\n  margin-top: 20px; }\n  .mat-tooltip-panel {\n  border-radius: 10px; }\n  .mat-tooltip {\n  background-color: #019b94;\n  font-size: 12px;\n  border-radius: 10px;\n  padding: 10px 20px !important;\n  font-weight: 200;\n  max-width: 310px !important; }\n  @media screen and (-ms-high-contrast: active) {\n  .mat-tooltip {\n    outline: solid 0px; } }\n  .mat-tooltip-handset {\n  margin: 24px;\n  padding-left: 16px;\n  padding-right: 16px; }\n  .example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .example-container > * {\n  width: 100%; }\n  .example-right-align {\n  text-align: right; }\n  input::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  display: none; }\n  input {\n  -moz-appearance: textfield; }\n  button {\n  -webkit-transition: opacity 1s;\n  transition: opacity 1s; }\n  button:disabled {\n  opacity: .5; }\n  /* Large devices (large desktops, 1200px and up) */\n  @media only screen and (max-width: 1200px) {\n  #page-banner .banner-content .banner-text {\n    font-size: 80px;\n    max-width: 400px; } }\n  /* Medium devices (desktops, 992px and up) */\n  /* Small devices (tablets, 768px and up) */\n  #offers {\n  padding-top: 40px;\n  padding-bottom: 100px; }\n  #offers .flex-center-bertical {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position: relative; }\n  #offers h1 {\n    text-align: center;\n    margin-top: 50px;\n    color: #4a3082;\n    margin-bottom: 20px; }\n  #offers h3 {\n    text-align: center;\n    color: #404040;\n    margin-bottom: 30px; }\n  #offers swiper {\n    display: block;\n    padding: 0 60px; }\n  #offers .custome-navigate-slider {\n    position: absolute;\n    right: 0;\n    left: 0; }\n  #offers .custome-navigate-slider .nav-arrow {\n      display: inline-block; }\n  #offers .custome-navigate-slider .nav-arrow i {\n        font-size: 50px;\n        color: #d3d3d3;\n        cursor: pointer; }\n  #offers .custome-navigate-slider .nav-arrow i::-moz-selection {\n        background: transparent; }\n  #offers .custome-navigate-slider .nav-arrow i::selection {\n        background: transparent; }\n  #offers .custome-navigate-slider .back {\n      float: left; }\n  #offers .custome-navigate-slider .next {\n      float: right; }\n  #offers .swiper-slide {\n    margin-top: 30px;\n    background: #f1f1f1;\n    border-radius: 6px;\n    cursor: pointer;\n    -webkit-box-shadow: 0px 2px 9.8px 0.2px rgba(0, 0, 0, 0.16);\n            box-shadow: 0px 2px 9.8px 0.2px rgba(0, 0, 0, 0.16); }\n  #offers .swiper-slide .slide-header {\n      background: linear-gradient(37deg, #019b94 0%, #0178b1 100%); }\n  #offers .swiper-slide .slide-header h1 {\n        margin: 0;\n        color: #fff;\n        padding-top: 12px; }\n  #offers .swiper-slide .slide-header h3 {\n        color: #fff;\n        margin-top: 0;\n        font-weight: 600;\n        padding-bottom: 10px; }\n  #offers .swiper-slide .slide-content {\n      text-align: center; }\n  #offers .swiper-slide .slide-content .price {\n        font-size: 66px;\n        font-weight: 900;\n        line-height: 1;\n        color: #0178b1; }\n  #offers .swiper-slide .slide-content .days {\n        color: #0178b1;\n        font-size: 20px;\n        font-weight: 600;\n        margin-top: 4px; }\n  #offers .swiper-slide .slide-content .slide-content {\n        color: #000;\n        line-height: 1.5;\n        font-size: 20px;\n        padding: 50px 20px 0; }\n  #offers .swiper-slide .slide-content button {\n        background: linear-gradient(37deg, #019b94 0%, #0178b1 100%);\n        max-width: 230px;\n        margin: 30px auto;\n        display: block; }\n  #offers .swiper-slide.swiper-slide-active .slide-header {\n      background: linear-gradient(37deg, #473284 0%, #038ed8 100%); }\n  #offers .swiper-slide.swiper-slide-active .slide-content .days {\n      color: #473284; }\n  #offers .swiper-slide.swiper-slide-active .slide-content .price {\n      color: #473284; }\n  #offers .swiper-slide.swiper-slide-active .slide-content button {\n      background: linear-gradient(37deg, #473284 0%, #038ed8 100%); }\n  #offers .swiper-slide.swiper-slide-next {\n      margin-top: 0; }\n  #offers .swiper-slide.swiper-slide-next .slide-header {\n        background: linear-gradient(37deg, #fec80a 0%, #ed2b26 100%); }\n  #offers .swiper-slide.swiper-slide-next .slide-content .days {\n        color: #f04a20; }\n  #offers .swiper-slide.swiper-slide-next .slide-content .price {\n        color: #f04a20;\n        margin-top: 50px; }\n  #offers .swiper-slide.swiper-slide-next .slide-content .slide-content {\n        padding-bottom: 60px; }\n  #offers .swiper-slide.swiper-slide-next .slide-content button {\n        background: linear-gradient(37deg, #fec80a 0%, #ed2b26 100%); }\n  /* Small devices (tablets, 768px and up) */\n  /* Small devices (tablets, 540px and up) */\n  @media only screen and (max-width: 540px) {\n  #offers swiper {\n    padding: 0 20px; }\n  #offers .custome-navigate-slider {\n    position: absolute;\n    right: -15px;\n    left: -15px; }\n    #offers .custome-navigate-slider .nav-arrow {\n      display: inline-block; }\n      #offers .custome-navigate-slider .nav-arrow i {\n        font-size: 36px;\n        color: #d3d3d3;\n        cursor: pointer; } }\n"

/***/ }),

/***/ "./src/app/offers/offers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_swiper_wrapper__ = __webpack_require__("./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OffersComponent = /** @class */ (function () {
    function OffersComponent() {
        // slider config
        this.index = 0;
        this.config = {
            direction: 'horizontal',
            slidesPerView: 3,
            spaceBetween: 30,
            keyboard: true,
            breakpoints: {
                768: {
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 2,
                },
            }
            // navigation: true,
        };
        // slider content
        this.sliderItems = [
            {
                'title': '8GB',
                'sub-title': 'גלישה ושיחות',
                'price': '189',
                'days': '30 ימים',
                'info': 'רשת At&t שיחות יוצאות ונכנסות ללא הגבלה שמירה על המספר הישראלי'
            },
            {
                'title': 'UNLIMITED',
                'sub-title': 'גלישה ושיחות',
                'price': '29',
                'days': 'ליום',
                'info': '!ניתן לטעינות חוזרת בכל עת גלישה במהירות מירבית סים אחד לכל החיים'
            },
            {
                'title': '1GB',
                'sub-title': 'גלישה ושיחות',
                'price': '99',
                'days': '30 ימים',
                'info': '!ניתן לטעינות חוזרת בכל עת גלישה במהירות מירבית סים אחד לכל החיים'
            },
            {
                'title': '8GB',
                'sub-title': 'גלישה ושיחות',
                'price': '189',
                'days': '30 ימים',
                'info': 'רשת At&t שיחות יוצאות ונכנסות ללא הגבלה שמירה על המספר הישראלי'
            },
            {
                'title': 'UNLIMITED',
                'sub-title': 'גלישה ושיחות',
                'price': '29',
                'days': 'ליום',
                'info': '!ניתן לטעינות חוזרת בכל עת גלישה במהירות מירבית סים אחד לכל החיים'
            },
            {
                'title': '1GB',
                'sub-title': 'גלישה ושיחות',
                'price': '99',
                'days': '30 ימים',
                'info': '!ניתן לטעינות חוזרת בכל עת גלישה במהירות מירבית סים אחד לכל החיים'
            },
        ];
    }
    OffersComponent.prototype.nextSlide = function (speed) {
        this.componentRef.directiveRef.nextSlide(speed);
    };
    OffersComponent.prototype.prevSlide = function (speed) {
        this.componentRef.directiveRef.prevSlide(speed);
    };
    OffersComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ngx_swiper_wrapper__["b" /* SwiperComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_swiper_wrapper__["b" /* SwiperComponent */])
    ], OffersComponent.prototype, "componentRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ngx_swiper_wrapper__["c" /* SwiperDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_swiper_wrapper__["c" /* SwiperDirective */])
    ], OffersComponent.prototype, "directiveRef", void 0);
    OffersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-offers',
            template: __webpack_require__("./src/app/offers/offers.component.html"),
            styles: [__webpack_require__("./src/app/offers/offers.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OffersComponent);
    return OffersComponent;
}());



/***/ }),

/***/ "./src/app/payment/payment.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"payment-form\">\n\t<div class=\"container\">\n\t\t<h1>פרטי תשלום</h1>\n\t\t<h3>אנה הזן פרטי תשלום </h3>\n\t\t\n\t\t\n\t\t<form #PaymentForm=\"ngForm\" (ngSubmit)=\"onSubmit(PaymentForm)\">\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<span class=\"form-info\" (click)=\"tooltipCVV.show()\">?</span>\n\n\t\t\t\t<div class=\"row form-inputs\">\n\t\t\t\t\t<div class=\"col-md-2\" matTooltip=\"{{toptilCVV}}\" matTooltipPosition=\"above\" tooltip=\"matTooltip\" matTooltipShowDelay=\"100\" #tooltipCVV=\"matTooltip\" (mouseover)=\"tooltipCVV.hide()\">\n\t\t\t\t\t\t<mat-form-field class=\"cvv-input\">\n\t\t\t\t\t\t\t<input matInput \n\t\t\t\t\t\t\tplaceholder=\"CVV\"\n\t\t\t\t\t\t\tmaxlength=\"4\" \n\t\t\t\t\t\t\tminlength=\"4\"\n\t\t\t\t\t\t\t(keypress)=\"number_keyPress($event)\" \n\t\t\t\t\t\t\t#cvv \n\t\t\t\t\t\t\tname=\"cvv\" \n\t\t\t\t\t\t\tngModel>\n\t\t\t\t\t\t\t<mat-hint align=\"end\">{{cvv.value?.length || 0}}/4</mat-hint>\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t<input matInput required [matDatepicker]=\"picker1\" placeholder=\":תוקף\" name=\"date_card\" ngModel>\n\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n\t\t\t\t\t\t\t<mat-datepicker touchUi=\"true\" #picker1></mat-datepicker>\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t<input matInput \n\t\t\t\t\t\t\tplaceholder=\"מספר כרטיס אשראי\" \n\t\t\t\t\t\t\tminlength=\"16\" \n\t\t\t\t\t\t\tmaxlength=\"16\" \n\t\t\t\t\t\t\t(keypress)=\"number_keyPress($event)\" \n\t\t\t\t\t\t\t#numberCard \n\t\t\t\t\t\t\tname=\"numberCard\" \n\t\t\t\t\t\t\tngModel>\n\t\t\t\t\t\t\t<mat-hint align=\"end\">{{numberCard.value?.length || 0}}/16</mat-hint>\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<div class=\"payment-service\">\n\t\t\t\t\t\t<img src=\"./assets/img/1-payment.png\" alt=\"payment\">\n\t\t\t\t\t\t<img src=\"./assets/img/2-payment.png\" alt=\"payment\">\n\t\t\t\t\t\t<img src=\"./assets/img/3-payment.png\" alt=\"payment\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t<mat-checkbox [align]=\"true\" name=\"checked\" ngModel>מאשר לשמור פרטי הכרטיס במערכת לטעינות עתידיות</mat-checkbox>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<button mat-button class=\"bg-button\" [disabled]=\"!PaymentForm.valid\">הזמן כטיס </button>\n\t\t</form>\n\t\t\n\t</div>\n</section>\n\n<!--  -->\n<!-- <pre>{{ totalFormData | json }}</pre> -->\n<!--  -->"

/***/ }),

/***/ "./src/app/payment/payment.component.scss":
/***/ (function(module, exports) {

module.exports = ".gradient-background {\n  background: -webkit-gradient(linear, left top, right top, from(#512e7f), color-stop(80%, #a5196a), to(#a5196a));\n  background: linear-gradient(to right, #512e7f 0%, #a5196a 80%, #a5196a 100%); }\n  .gradient-background .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n    color: #fff; }\n  .gray-background {\n  background: #f1f1f1; }\n  h1, h2, h3, h4, h5, h6 {\n  margin: 10px 0; }\n  h1 {\n  font-size: 26px;\n  font-weight: 900; }\n  h2 {\n  font-size: 20px; }\n  h3 {\n  font-size: 18px; }\n  label {\n  font-weight: 400; }\n  .hedline {\n  text-align: center;\n  -webkit-box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n          box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-height: -webkit-max-content;\n  min-height: -moz-max-content;\n  min-height: max-content; }\n  .hedline h1 {\n    font-weight: 900; }\n  a {\n  color: #000; }\n  a:hover {\n  text-decoration: none; }\n  swiper > .swiper.s-wrapper .swiper-pagination .swiper-pagination-handle {\n  margin: 8px; }\n  .swiper-pagination-handle .swiper-pagination-bullet {\n  width: 15px;\n  height: 15px;\n  opacity: 1;\n  border: 2px solid #fff !important;\n  background: #fff; }\n  .swiper-pagination-handle .swiper-pagination-bullet-active {\n  background: transparent;\n  border: 2px solid #fff !important;\n  margin: 0 !important; }\n  input:-webkit-autofill {\n  -webkit-text-fill-color: #000 !important; }\n  input:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0 30px white inset; }\n  .mat-menu-panel {\n  width: 200px;\n  margin-top: 38px;\n  margin-left: -30px; }\n  .mat-elevation-z2 {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important; }\n  .mat-button-focus-overlay {\n  background-color: transparent !important; }\n  .mat-menu-panel button {\n  text-align: right;\n  font-size: 18px;\n  height: 30px;\n  line-height: 1;\n  padding: 0 20px;\n  font-family: 'Open Sans Hebrew', sans-serif; }\n  .mat-menu-content {\n  padding: 10px 0 !important; }\n  .mat-input-wrapper,\n.bg-button {\n  border-radius: 12px;\n  margin-bottom: 26px;\n  font-weight: 100;\n  font-size: 18px;\n  height: 50px; }\n  .mat-form-field-infix {\n  border: 0;\n  height: 50px;\n  line-height: 1.8;\n  padding-right: 10px; }\n  .mat-form-field {\n  max-width: 100%;\n  width: 100%; }\n  .mat-input-wrapper {\n  background: #fff;\n  color: #757575;\n  text-align: right;\n  padding-right: 30px; }\n  .mat-form-field-suffix {\n  position: absolute;\n  border-radius: 0;\n  width: 100%;\n  height: 100%; }\n  .mat-datepicker-toggle .mat-icon-button {\n  width: 100%;\n  height: 100%;\n  text-align: right;\n  padding-right: 10px; }\n  .mat-select-value {\n  padding-right: 24px; }\n  .mat-select-arrow-wrapper {\n  position: relative;\n  right: -12px; }\n  .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #733071; }\n  .mat-form-field-underline {\n  display: none; }\n  .mat-select-panel .mat-optgroup-label, .mat-select-panel .mat-option {\n  height: 50px; }\n  .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  margin-top: -8px;\n  line-height: 2;\n  color: #000; }\n  .bg-button {\n  color: #fff !important;\n  border-radius: 12px;\n  width: 100%;\n  font-size: 22px;\n  height: 50px;\n  background: -webkit-gradient(linear, left top, right top, from(#512e7f), color-stop(80%, #a5196a), to(#a5196a));\n  background: linear-gradient(to right, #512e7f 0%, #a5196a 80%, #a5196a 100%); }\n  .bg-button.bg-green-button {\n  background: #019b94;\n  max-width: 260px;\n  margin: 0 auto;\n  display: block; }\n  .bg-button.bg-orange-button {\n  background: #fcb30e;\n  margin: 0 auto;\n  margin: 20px auto;\n  display: block;\n  width: 180px; }\n  .mat-checkbox-inner-container,\n.mat-checkbox-frame {\n  width: 20px !important;\n  height: 20px !important;\n  border-radius: 5px !important;\n  padding-left: 10px; }\n  .mat-checkbox {\n  color: #000;\n  font-size: 20px !important;\n  font-weight: 200 !important; }\n  .mat-checkbox-layout {\n  width: 100% !important; }\n  .mat-checkbox-layout .mat-checkbox-label {\n  width: 100%;\n  text-align: right;\n  white-space: pre-line; }\n  .mat-checkbox-checked.mat-accent .mat-checkbox-background,\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background {\n  background: #019b94;\n  border-radius: 5px; }\n  .mat-form-field-hint-wrapper {\n  margin-top: 20px; }\n  .mat-tooltip-panel {\n  border-radius: 10px; }\n  .mat-tooltip {\n  background-color: #019b94;\n  font-size: 12px;\n  border-radius: 10px;\n  padding: 10px 20px !important;\n  font-weight: 200;\n  max-width: 310px !important; }\n  @media screen and (-ms-high-contrast: active) {\n  .mat-tooltip {\n    outline: solid 0px; } }\n  .mat-tooltip-handset {\n  margin: 24px;\n  padding-left: 16px;\n  padding-right: 16px; }\n  .example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .example-container > * {\n  width: 100%; }\n  .example-right-align {\n  text-align: right; }\n  input::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  display: none; }\n  input {\n  -moz-appearance: textfield; }\n  button {\n  -webkit-transition: opacity 1s;\n  transition: opacity 1s; }\n  button:disabled {\n  opacity: .5; }\n  /* Large devices (large desktops, 1200px and up) */\n  @media only screen and (max-width: 1200px) {\n  #page-banner .banner-content .banner-text {\n    font-size: 80px;\n    max-width: 400px; } }\n  /* Medium devices (desktops, 992px and up) */\n  /* Small devices (tablets, 768px and up) */\n  #payment-form h1 {\n  text-align: center;\n  margin-top: 54px;\n  color: #4a3082;\n  margin-bottom: 10px; }\n  #payment-form h3 {\n  text-align: center;\n  color: #404040;\n  margin-bottom: 54px; }\n  #payment-form .form-info {\n  display: inline-block;\n  color: #fff;\n  background: #019b94;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 22px;\n  position: absolute;\n  left: 15px;\n  margin-top: 6px;\n  cursor: pointer;\n  z-index: 1; }\n  #payment-form .form-inputs {\n  margin-bottom: 12px;\n  padding-left: 60px; }\n  #payment-form .payment-service img {\n  display: inline-block;\n  padding-right: 24px;\n  width: 68px; }\n  #payment-form .bg-button {\n  max-width: 500px;\n  display: block;\n  margin: 50px auto; }\n  /* Medium devices (desktops, 992px and up) */\n  @media only screen and (max-width: 992px) {\n  #payment-form .form-inputs {\n    padding-left: 0; }\n  #payment-form .cvv-input {\n    padding-left: 40px;\n    margin-bottom: 26px; } }\n  /* Small devices (tablets, 768px and up) */\n  @media only screen and (max-width: 768px) {\n  #payment-form .payment-service {\n    text-align: center;\n    margin-bottom: 20px; }\n  #payment-form .cvv-input {\n    padding-left: 40px;\n    margin-bottom: 26px; } }\n"

/***/ }),

/***/ "./src/app/payment/payment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaymentComponent = /** @class */ (function () {
    function PaymentComponent() {
        this.toptilCVV = "CVV is an anti-fraud security feature to help verify that you are in possession of your credit card. On most credit cards (including Visa and Mastercard), the three-digit CVV number is printed on the signature panel on the back of the card immediately after the card's account number. On American Express credit cards, the four-digit CVV number is printed on the front of the card above the card’s account number.";
        // show animation
        this.isShow = 'hide';
    }
    PaymentComponent.prototype.onSubmit = function (PaymentForm) {
        this.isShow = 'show';
        console.log(this.isShow);
    };
    // // scroll animate
    // scrollAnimate(element) {
    // 	setTimeout(function(){
    // 		element.scrollIntoView({ behavior: "smooth", block: "start" });
    // 	}, 250)
    // }
    PaymentComponent.prototype.number_keyPress = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    };
    PaymentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], PaymentComponent.prototype, "totalFormData", void 0);
    PaymentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-payment',
            template: __webpack_require__("./src/app/payment/payment.component.html"),
            styles: [__webpack_require__("./src/app/payment/payment.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/promotion/promotion.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"promotion\" class=\"gradient-background\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<img src=\"./assets/img/promotion.png\" alt=\"promotion\">\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<div class=\"title\"><b>שמור על הקשר</b></div>\n\t\t\t\t<div class=\"title\">מכל מקום בעולם</div>\n\n\t\t\t\t<div class=\"list\">\n\t\t\t\t\t<div class=\"list-item\">סים אחד לכל מכשירי סלולר</div>\n\t\t\t\t\t<div class=\"list-item\">חבילות גלישה ושיחות מותאמות לפי הצרכים שלך</div>\n\t\t\t\t\t<div class=\"list-item\">תמוכה תכנית 24/7</div>\n\t\t\t\t\t<div class=\"list-item\">משלוח חינם</div>\n\t\t\t\t</div>\n\t\t\t\t<button type=\"submit\" mat-button class=\"bg-button\">הזמינו\\ עכשיו!</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>"

/***/ }),

/***/ "./src/app/promotion/promotion.component.scss":
/***/ (function(module, exports) {

module.exports = ".gradient-background {\n  background: -webkit-gradient(linear, left top, right top, from(#512e7f), color-stop(80%, #a5196a), to(#a5196a));\n  background: linear-gradient(to right, #512e7f 0%, #a5196a 80%, #a5196a 100%); }\n  .gradient-background .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n    color: #fff; }\n  .gray-background {\n  background: #f1f1f1; }\n  h1, h2, h3, h4, h5, h6 {\n  margin: 10px 0; }\n  h1 {\n  font-size: 26px;\n  font-weight: 900; }\n  h2 {\n  font-size: 20px; }\n  h3 {\n  font-size: 18px; }\n  label {\n  font-weight: 400; }\n  .hedline {\n  text-align: center;\n  -webkit-box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n          box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-height: -webkit-max-content;\n  min-height: -moz-max-content;\n  min-height: max-content; }\n  .hedline h1 {\n    font-weight: 900; }\n  a {\n  color: #000; }\n  a:hover {\n  text-decoration: none; }\n  swiper > .swiper.s-wrapper .swiper-pagination .swiper-pagination-handle {\n  margin: 8px; }\n  .swiper-pagination-handle .swiper-pagination-bullet {\n  width: 15px;\n  height: 15px;\n  opacity: 1;\n  border: 2px solid #fff !important;\n  background: #fff; }\n  .swiper-pagination-handle .swiper-pagination-bullet-active {\n  background: transparent;\n  border: 2px solid #fff !important;\n  margin: 0 !important; }\n  input:-webkit-autofill {\n  -webkit-text-fill-color: #000 !important; }\n  input:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0 30px white inset; }\n  .mat-menu-panel {\n  width: 200px;\n  margin-top: 38px;\n  margin-left: -30px; }\n  .mat-elevation-z2 {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important; }\n  .mat-button-focus-overlay {\n  background-color: transparent !important; }\n  .mat-menu-panel button {\n  text-align: right;\n  font-size: 18px;\n  height: 30px;\n  line-height: 1;\n  padding: 0 20px;\n  font-family: 'Open Sans Hebrew', sans-serif; }\n  .mat-menu-content {\n  padding: 10px 0 !important; }\n  .mat-input-wrapper,\n.bg-button {\n  border-radius: 12px;\n  margin-bottom: 26px;\n  font-weight: 100;\n  font-size: 18px;\n  height: 50px; }\n  .mat-form-field-infix {\n  border: 0;\n  height: 50px;\n  line-height: 1.8;\n  padding-right: 10px; }\n  .mat-form-field {\n  max-width: 100%;\n  width: 100%; }\n  .mat-input-wrapper {\n  background: #fff;\n  color: #757575;\n  text-align: right;\n  padding-right: 30px; }\n  .mat-form-field-suffix {\n  position: absolute;\n  border-radius: 0;\n  width: 100%;\n  height: 100%; }\n  .mat-datepicker-toggle .mat-icon-button {\n  width: 100%;\n  height: 100%;\n  text-align: right;\n  padding-right: 10px; }\n  .mat-select-value {\n  padding-right: 24px; }\n  .mat-select-arrow-wrapper {\n  position: relative;\n  right: -12px; }\n  .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #733071; }\n  .mat-form-field-underline {\n  display: none; }\n  .mat-select-panel .mat-optgroup-label, .mat-select-panel .mat-option {\n  height: 50px; }\n  .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  margin-top: -8px;\n  line-height: 2;\n  color: #000; }\n  .bg-button {\n  color: #fff !important;\n  border-radius: 12px;\n  width: 100%;\n  font-size: 22px;\n  height: 50px;\n  background: -webkit-gradient(linear, left top, right top, from(#512e7f), color-stop(80%, #a5196a), to(#a5196a));\n  background: linear-gradient(to right, #512e7f 0%, #a5196a 80%, #a5196a 100%); }\n  .bg-button.bg-green-button {\n  background: #019b94;\n  max-width: 260px;\n  margin: 0 auto;\n  display: block; }\n  .bg-button.bg-orange-button {\n  background: #fcb30e;\n  margin: 0 auto;\n  margin: 20px auto;\n  display: block;\n  width: 180px; }\n  .mat-checkbox-inner-container,\n.mat-checkbox-frame {\n  width: 20px !important;\n  height: 20px !important;\n  border-radius: 5px !important;\n  padding-left: 10px; }\n  .mat-checkbox {\n  color: #000;\n  font-size: 20px !important;\n  font-weight: 200 !important; }\n  .mat-checkbox-layout {\n  width: 100% !important; }\n  .mat-checkbox-layout .mat-checkbox-label {\n  width: 100%;\n  text-align: right;\n  white-space: pre-line; }\n  .mat-checkbox-checked.mat-accent .mat-checkbox-background,\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background {\n  background: #019b94;\n  border-radius: 5px; }\n  .mat-form-field-hint-wrapper {\n  margin-top: 20px; }\n  .mat-tooltip-panel {\n  border-radius: 10px; }\n  .mat-tooltip {\n  background-color: #019b94;\n  font-size: 12px;\n  border-radius: 10px;\n  padding: 10px 20px !important;\n  font-weight: 200;\n  max-width: 310px !important; }\n  @media screen and (-ms-high-contrast: active) {\n  .mat-tooltip {\n    outline: solid 0px; } }\n  .mat-tooltip-handset {\n  margin: 24px;\n  padding-left: 16px;\n  padding-right: 16px; }\n  .example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .example-container > * {\n  width: 100%; }\n  .example-right-align {\n  text-align: right; }\n  input::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  display: none; }\n  input {\n  -moz-appearance: textfield; }\n  button {\n  -webkit-transition: opacity 1s;\n  transition: opacity 1s; }\n  button:disabled {\n  opacity: .5; }\n  /* Large devices (large desktops, 1200px and up) */\n  @media only screen and (max-width: 1200px) {\n  #page-banner .banner-content .banner-text {\n    font-size: 80px;\n    max-width: 400px; } }\n  /* Medium devices (desktops, 992px and up) */\n  /* Small devices (tablets, 768px and up) */\n  #promotion {\n  background: linear-gradient(186deg, transparent 67%, #731f5f 50%), linear-gradient(150deg, #982167 0%, #8b256c 75%, #8b256c 100%);\n  color: #fff;\n  padding-top: 60px;\n  text-align: right; }\n  #promotion img {\n    max-width: 100%; }\n  #promotion .title {\n    font-size: 64px;\n    color: #fff;\n    line-height: 1.112; }\n  #promotion .title b {\n      font-weight: 900; }\n  #promotion .list {\n    padding-top: 20px;\n    padding-bottom: 30px; }\n  #promotion .list .list-item {\n      font-size: 22px; }\n  #promotion .list .list-item:after {\n        content: '';\n        width: 16px;\n        height: 16px;\n        display: inline-block;\n        border-radius: 50%;\n        border: 2px solid #4b0049;\n        margin: 2px 0;\n        margin-left: 20px; }\n  #promotion button {\n    background: linear-gradient(37deg, #019b94 0%, #0178b1 100%);\n    width: 100%; }\n  /* Medium devices (desktops, 992px and up) */\n  @media only screen and (max-width: 992px) {\n  #promotion .title {\n    font-size: 40px; }\n  #promotion .list .list-item {\n    font-size: 20px; }\n  #promotion button {\n    margin-bottom: 30px; } }\n  /* Small devices (tablets, 768px and up) */\n  @media only screen and (max-width: 768px) {\n  #promotion img {\n    width: 320px;\n    display: block;\n    margin: 0 auto; } }\n"

/***/ }),

/***/ "./src/app/promotion/promotion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PromotionComponent = /** @class */ (function () {
    function PromotionComponent() {
    }
    PromotionComponent.prototype.ngOnInit = function () {
    };
    PromotionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-promotion',
            template: __webpack_require__("./src/app/promotion/promotion.component.html"),
            styles: [__webpack_require__("./src/app/promotion/promotion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PromotionComponent);
    return PromotionComponent;
}());



/***/ }),

/***/ "./src/app/sim-active-form/sim-active-form.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"sim-active-form\">\n\t<div class=\"container\">\n\t\t\n\t\t<h1>מועד הפעלת הכרטיס</h1>\n\t\t<form #simAcriveFrom=\"ngForm\" (ngSubmit)=\"onSubmit(simAcriveFrom)\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t<b class=\"days-travel\"\n\t\t\t\t\t*ngIf=\"simAcriveFrom.value.dateLanding && simAcriveFrom.value.dateAppearance; else showInfo\">\n\t\t\t\t\t{{ daydiff( simAcriveFrom.value.dateAppearance, simAcriveFrom.value.dateLanding) }}\n\t\t\t\t\t ימי נסיעה</b>\n\t\t\t\t\t<ng-template #showInfo><b class=\"days-travel\">הזן את התאריך</b></ng-template>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-5\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput \n\t\t\t\t\t\t[min]=\"simAcriveFrom.value.dateAppearance\"\n\t\t\t\t\t\t[matDatepicker]=\"pickerDateLanding\" \n\t\t\t\t\t\tplaceholder=\"בחרו תאריך נחיתה\" name=\"dateLanding\" ngModel>\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"pickerDateLanding\"></mat-datepicker-toggle>\n\t\t\t\t\t\t<mat-datepicker touchUi=\"true\" #pickerDateLanding></mat-datepicker>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-5\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput \n\t\t\t\t\t\t [min]=\"minDate\"\n\t\t\t\t\t\t [max]=\"simAcriveFrom.value.dateLanding\"\n\t\t\t\t\t\t [matDatepicker]=\"pickerDateAppearance\" \n\t\t\t\t\t\t placeholder=\"בחרו תאריך המראה\" name=\"dateAppearance\" ngModel>\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"pickerDateAppearance\"></mat-datepicker-toggle>\n\t\t\t\t\t\t<mat-datepicker touchUi=\"true\" #pickerDateAppearance></mat-datepicker>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t<button mat-button class=\"bg-button bg-green-button\"\n\t\t\t\t\t[disabled]=\"!simAcriveFrom.valid\"\n\t\t\t\t\t(click)=\"scrollAnimate(appAdditionally)\"\n\t\t\t\t\t(click)=\"isShow='show'\">המשך</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</form>\n\t\t\n\t</div>\n</section>\n\n<!--  -->\n<!-- <pre>{{ clientInfoFormData | json}}</pre> -->\n<!--  -->\n\n<div [@toggleHeight]=\"isShow\" #appAdditionally>\n\t<app-additionally\n\t\t[simAcriveFromData]=\"simAcriveFrom.value\">\n\t</app-additionally>\n</div>"

/***/ }),

/***/ "./src/app/sim-active-form/sim-active-form.component.scss":
/***/ (function(module, exports) {

module.exports = ".gradient-background {\n  background: -webkit-gradient(linear, left top, right top, from(#512e7f), color-stop(80%, #a5196a), to(#a5196a));\n  background: linear-gradient(to right, #512e7f 0%, #a5196a 80%, #a5196a 100%); }\n  .gradient-background .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n    color: #fff; }\n  .gray-background {\n  background: #f1f1f1; }\n  h1, h2, h3, h4, h5, h6 {\n  margin: 10px 0; }\n  h1 {\n  font-size: 26px;\n  font-weight: 900; }\n  h2 {\n  font-size: 20px; }\n  h3 {\n  font-size: 18px; }\n  label {\n  font-weight: 400; }\n  .hedline {\n  text-align: center;\n  -webkit-box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n          box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-height: -webkit-max-content;\n  min-height: -moz-max-content;\n  min-height: max-content; }\n  .hedline h1 {\n    font-weight: 900; }\n  a {\n  color: #000; }\n  a:hover {\n  text-decoration: none; }\n  swiper > .swiper.s-wrapper .swiper-pagination .swiper-pagination-handle {\n  margin: 8px; }\n  .swiper-pagination-handle .swiper-pagination-bullet {\n  width: 15px;\n  height: 15px;\n  opacity: 1;\n  border: 2px solid #fff !important;\n  background: #fff; }\n  .swiper-pagination-handle .swiper-pagination-bullet-active {\n  background: transparent;\n  border: 2px solid #fff !important;\n  margin: 0 !important; }\n  input:-webkit-autofill {\n  -webkit-text-fill-color: #000 !important; }\n  input:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0 30px white inset; }\n  .mat-menu-panel {\n  width: 200px;\n  margin-top: 38px;\n  margin-left: -30px; }\n  .mat-elevation-z2 {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important; }\n  .mat-button-focus-overlay {\n  background-color: transparent !important; }\n  .mat-menu-panel button {\n  text-align: right;\n  font-size: 18px;\n  height: 30px;\n  line-height: 1;\n  padding: 0 20px;\n  font-family: 'Open Sans Hebrew', sans-serif; }\n  .mat-menu-content {\n  padding: 10px 0 !important; }\n  .mat-input-wrapper,\n.bg-button {\n  border-radius: 12px;\n  margin-bottom: 26px;\n  font-weight: 100;\n  font-size: 18px;\n  height: 50px; }\n  .mat-form-field-infix {\n  border: 0;\n  height: 50px;\n  line-height: 1.8;\n  padding-right: 10px; }\n  .mat-form-field {\n  max-width: 100%;\n  width: 100%; }\n  .mat-input-wrapper {\n  background: #fff;\n  color: #757575;\n  text-align: right;\n  padding-right: 30px; }\n  .mat-form-field-suffix {\n  position: absolute;\n  border-radius: 0;\n  width: 100%;\n  height: 100%; }\n  .mat-datepicker-toggle .mat-icon-button {\n  width: 100%;\n  height: 100%;\n  text-align: right;\n  padding-right: 10px; }\n  .mat-select-value {\n  padding-right: 24px; }\n  .mat-select-arrow-wrapper {\n  position: relative;\n  right: -12px; }\n  .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #733071; }\n  .mat-form-field-underline {\n  display: none; }\n  .mat-select-panel .mat-optgroup-label, .mat-select-panel .mat-option {\n  height: 50px; }\n  .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  margin-top: -8px;\n  line-height: 2;\n  color: #000; }\n  .bg-button {\n  color: #fff !important;\n  border-radius: 12px;\n  width: 100%;\n  font-size: 22px;\n  height: 50px;\n  background: -webkit-gradient(linear, left top, right top, from(#512e7f), color-stop(80%, #a5196a), to(#a5196a));\n  background: linear-gradient(to right, #512e7f 0%, #a5196a 80%, #a5196a 100%); }\n  .bg-button.bg-green-button {\n  background: #019b94;\n  max-width: 260px;\n  margin: 0 auto;\n  display: block; }\n  .bg-button.bg-orange-button {\n  background: #fcb30e;\n  margin: 0 auto;\n  margin: 20px auto;\n  display: block;\n  width: 180px; }\n  .mat-checkbox-inner-container,\n.mat-checkbox-frame {\n  width: 20px !important;\n  height: 20px !important;\n  border-radius: 5px !important;\n  padding-left: 10px; }\n  .mat-checkbox {\n  color: #000;\n  font-size: 20px !important;\n  font-weight: 200 !important; }\n  .mat-checkbox-layout {\n  width: 100% !important; }\n  .mat-checkbox-layout .mat-checkbox-label {\n  width: 100%;\n  text-align: right;\n  white-space: pre-line; }\n  .mat-checkbox-checked.mat-accent .mat-checkbox-background,\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background {\n  background: #019b94;\n  border-radius: 5px; }\n  .mat-form-field-hint-wrapper {\n  margin-top: 20px; }\n  .mat-tooltip-panel {\n  border-radius: 10px; }\n  .mat-tooltip {\n  background-color: #019b94;\n  font-size: 12px;\n  border-radius: 10px;\n  padding: 10px 20px !important;\n  font-weight: 200;\n  max-width: 310px !important; }\n  @media screen and (-ms-high-contrast: active) {\n  .mat-tooltip {\n    outline: solid 0px; } }\n  .mat-tooltip-handset {\n  margin: 24px;\n  padding-left: 16px;\n  padding-right: 16px; }\n  .example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .example-container > * {\n  width: 100%; }\n  .example-right-align {\n  text-align: right; }\n  input::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  display: none; }\n  input {\n  -moz-appearance: textfield; }\n  button {\n  -webkit-transition: opacity 1s;\n  transition: opacity 1s; }\n  button:disabled {\n  opacity: .5; }\n  /* Large devices (large desktops, 1200px and up) */\n  @media only screen and (max-width: 1200px) {\n  #page-banner .banner-content .banner-text {\n    font-size: 80px;\n    max-width: 400px; } }\n  /* Medium devices (desktops, 992px and up) */\n  /* Small devices (tablets, 768px and up) */\n  #sim-active-form {\n  padding-bottom: 104px;\n  padding-top: 20px; }\n  #sim-active-form h1 {\n    text-align: center;\n    margin-top: 70px;\n    color: #4a3082;\n    margin-bottom: 66px; }\n  #sim-active-form .days-travel {\n    color: #019b94;\n    font-size: 20px;\n    line-height: 42px; }\n  #sim-active-form .bg-button {\n    margin-top: 30px; }\n"

/***/ }),

/***/ "./src/app/sim-active-form/sim-active-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimActiveFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation__ = __webpack_require__("./src/app/animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimActiveFormComponent = /** @class */ (function () {
    function SimActiveFormComponent() {
        this.minDate = new Date(); //today
        // show animation
        this.isShow = 'hide';
    }
    SimActiveFormComponent.prototype.daydiff = function (first, second) {
        return Math.round((second - first) / (1000 * 60 * 60 * 24));
    };
    SimActiveFormComponent.prototype.onSubmit = function (simAcriveFrom) {
        this.isShow = 'show';
        console.log(this.isShow);
    };
    // scroll animate
    SimActiveFormComponent.prototype.scrollAnimate = function (element) {
        setTimeout(function () {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 250);
    };
    SimActiveFormComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], SimActiveFormComponent.prototype, "clientInfoFormData", void 0);
    SimActiveFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sim-active-form',
            template: __webpack_require__("./src/app/sim-active-form/sim-active-form.component.html"),
            animations: [
                __WEBPACK_IMPORTED_MODULE_1__animation__["a" /* toggleHeight */]
            ],
            styles: [__webpack_require__("./src/app/sim-active-form/sim-active-form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SimActiveFormComponent);
    return SimActiveFormComponent;
}());



/***/ }),

/***/ "./src/app/sim-order-page/sim-order-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-banner></app-banner>\n\n<app-form-sim></app-form-sim>\n\n<!-- <app-client-info></app-client-info> -->\n\n<!-- <app-sim-active-form></app-sim-active-form> -->\n\n<!-- <app-additionally></app-additionally> -->\n\n<!-- <app-total></app-total> -->\n\n<!-- <app-payment></app-payment> -->"

/***/ }),

/***/ "./src/app/sim-order-page/sim-order-page.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sim-order-page/sim-order-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimOrderPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SimOrderPageComponent = /** @class */ (function () {
    function SimOrderPageComponent() {
    }
    SimOrderPageComponent.prototype.ngOnInit = function () {
    };
    SimOrderPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sim-order-page',
            template: __webpack_require__("./src/app/sim-order-page/sim-order-page.component.html"),
            styles: [__webpack_require__("./src/app/sim-order-page/sim-order-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SimOrderPageComponent);
    return SimOrderPageComponent;
}());



/***/ }),

/***/ "./src/app/total/total.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"total\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-6 input-box\">\n\t\t\t\t<h1>סה״כ לתשלום</h1>\n\t\t\t\t<!-- <h2>יש לך קוד קופון</h2> -->\n\t\t\t\t<form #totalForm=\"ngForm\" (ngSubmit)=\"onSubmit(totalForm)\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput placeholder=\"הזן קוד קופון\" name=\"coupon\" ngModel/>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</form>\n\t\t\t\t<div class=\"total-price\">₪ 117</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-6 selected-services\">\n\t\t\t\t<h1>שרותים שנבחרו</h1>\n\t\t\t\t<table class=\"table\">\n\t\t\t\t  <tbody>\n\t\t\t\t    <tr>\n\t\t\t\t      <td><b>29 ₪ ליום</b></td>\n\t\t\t\t      <td>unlimited : חבילת גלישה</td>\n\t\t\t\t    </tr>\n\t\t\t\t    <tr>\n\t\t\t\t      <td><b>10 ימים</b></td>\n\t\t\t\t      <td>סה”כ ימים </td>\n\t\t\t\t    </tr>\n\t\t\t\t    <tr>\n\t\t\t\t      <td><b> </b></td>\n\t\t\t\t      <td> </td> \n\t\t\t\t    </tr>\n\t\t\t\t    <tr>\n\t\t\t\t      <td><b>59 ₪ </b></td>\n\t\t\t\t      <td>unlimited : חבילת שיחות</td>\n\t\t\t\t    </tr>\n\t\t\t\t    <tr>\n\t\t\t\t      <td><b>29 ₪ </b></td>\n\t\t\t\t      <td>עלות כרטיס ומשלוח (חד פעמי)</td> \n\t\t\t\t    </tr>\n\t\t\t\t    \n\t\t\t\t  </tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<h3>!ניתן לטעינות חוזרת בכל עת גלישה במהירות מירבית סים אחד לכל החיים*</h3>\n\t\t\t\t<button mat-button class=\"bg-button bg-green-button\"\n\t\t\t\t(click)=\"scrollAnimate(appPayment)\"\n\t\t\t\t(click)=\"isShow='show'\">המשך</button>\n\t\t\t\t<hr>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<!--  -->\n<!-- <pre>{{ additionallyFromData | json }}</pre> -->\n<!--  -->\n\n<div [@toggleHeight]=\"isShow\" #appPayment>\n\t<app-payment [totalFormData]=\"totalForm.value\">\n\t</app-payment>\n</div>"

/***/ }),

/***/ "./src/app/total/total.component.scss":
/***/ (function(module, exports) {

module.exports = ".gradient-background {\n  background: -webkit-gradient(linear, left top, right top, from(#512e7f), color-stop(80%, #a5196a), to(#a5196a));\n  background: linear-gradient(to right, #512e7f 0%, #a5196a 80%, #a5196a 100%); }\n  .gradient-background .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n    color: #fff; }\n  .gray-background {\n  background: #f1f1f1; }\n  h1, h2, h3, h4, h5, h6 {\n  margin: 10px 0; }\n  h1 {\n  font-size: 26px;\n  font-weight: 900; }\n  h2 {\n  font-size: 20px; }\n  h3 {\n  font-size: 18px; }\n  label {\n  font-weight: 400; }\n  .hedline {\n  text-align: center;\n  -webkit-box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n          box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.25);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-height: -webkit-max-content;\n  min-height: -moz-max-content;\n  min-height: max-content; }\n  .hedline h1 {\n    font-weight: 900; }\n  a {\n  color: #000; }\n  a:hover {\n  text-decoration: none; }\n  swiper > .swiper.s-wrapper .swiper-pagination .swiper-pagination-handle {\n  margin: 8px; }\n  .swiper-pagination-handle .swiper-pagination-bullet {\n  width: 15px;\n  height: 15px;\n  opacity: 1;\n  border: 2px solid #fff !important;\n  background: #fff; }\n  .swiper-pagination-handle .swiper-pagination-bullet-active {\n  background: transparent;\n  border: 2px solid #fff !important;\n  margin: 0 !important; }\n  input:-webkit-autofill {\n  -webkit-text-fill-color: #000 !important; }\n  input:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0 30px white inset; }\n  .mat-menu-panel {\n  width: 200px;\n  margin-top: 38px;\n  margin-left: -30px; }\n  .mat-elevation-z2 {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important; }\n  .mat-button-focus-overlay {\n  background-color: transparent !important; }\n  .mat-menu-panel button {\n  text-align: right;\n  font-size: 18px;\n  height: 30px;\n  line-height: 1;\n  padding: 0 20px;\n  font-family: 'Open Sans Hebrew', sans-serif; }\n  .mat-menu-content {\n  padding: 10px 0 !important; }\n  .mat-input-wrapper,\n.bg-button {\n  border-radius: 12px;\n  margin-bottom: 26px;\n  font-weight: 100;\n  font-size: 18px;\n  height: 50px; }\n  .mat-form-field-infix {\n  border: 0;\n  height: 50px;\n  line-height: 1.8;\n  padding-right: 10px; }\n  .mat-form-field {\n  max-width: 100%;\n  width: 100%; }\n  .mat-input-wrapper {\n  background: #fff;\n  color: #757575;\n  text-align: right;\n  padding-right: 30px; }\n  .mat-form-field-suffix {\n  position: absolute;\n  border-radius: 0;\n  width: 100%;\n  height: 100%; }\n  .mat-datepicker-toggle .mat-icon-button {\n  width: 100%;\n  height: 100%;\n  text-align: right;\n  padding-right: 10px; }\n  .mat-select-value {\n  padding-right: 24px; }\n  .mat-select-arrow-wrapper {\n  position: relative;\n  right: -12px; }\n  .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #733071; }\n  .mat-form-field-underline {\n  display: none; }\n  .mat-select-panel .mat-optgroup-label, .mat-select-panel .mat-option {\n  height: 50px; }\n  .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  margin-top: -8px;\n  line-height: 2;\n  color: #000; }\n  .bg-button {\n  color: #fff !important;\n  border-radius: 12px;\n  width: 100%;\n  font-size: 22px;\n  height: 50px;\n  background: -webkit-gradient(linear, left top, right top, from(#512e7f), color-stop(80%, #a5196a), to(#a5196a));\n  background: linear-gradient(to right, #512e7f 0%, #a5196a 80%, #a5196a 100%); }\n  .bg-button.bg-green-button {\n  background: #019b94;\n  max-width: 260px;\n  margin: 0 auto;\n  display: block; }\n  .bg-button.bg-orange-button {\n  background: #fcb30e;\n  margin: 0 auto;\n  margin: 20px auto;\n  display: block;\n  width: 180px; }\n  .mat-checkbox-inner-container,\n.mat-checkbox-frame {\n  width: 20px !important;\n  height: 20px !important;\n  border-radius: 5px !important;\n  padding-left: 10px; }\n  .mat-checkbox {\n  color: #000;\n  font-size: 20px !important;\n  font-weight: 200 !important; }\n  .mat-checkbox-layout {\n  width: 100% !important; }\n  .mat-checkbox-layout .mat-checkbox-label {\n  width: 100%;\n  text-align: right;\n  white-space: pre-line; }\n  .mat-checkbox-checked.mat-accent .mat-checkbox-background,\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background {\n  background: #019b94;\n  border-radius: 5px; }\n  .mat-form-field-hint-wrapper {\n  margin-top: 20px; }\n  .mat-tooltip-panel {\n  border-radius: 10px; }\n  .mat-tooltip {\n  background-color: #019b94;\n  font-size: 12px;\n  border-radius: 10px;\n  padding: 10px 20px !important;\n  font-weight: 200;\n  max-width: 310px !important; }\n  @media screen and (-ms-high-contrast: active) {\n  .mat-tooltip {\n    outline: solid 0px; } }\n  .mat-tooltip-handset {\n  margin: 24px;\n  padding-left: 16px;\n  padding-right: 16px; }\n  .example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .example-container > * {\n  width: 100%; }\n  .example-right-align {\n  text-align: right; }\n  input::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  display: none; }\n  input {\n  -moz-appearance: textfield; }\n  button {\n  -webkit-transition: opacity 1s;\n  transition: opacity 1s; }\n  button:disabled {\n  opacity: .5; }\n  /* Large devices (large desktops, 1200px and up) */\n  @media only screen and (max-width: 1200px) {\n  #page-banner .banner-content .banner-text {\n    font-size: 80px;\n    max-width: 400px; } }\n  /* Medium devices (desktops, 992px and up) */\n  /* Small devices (tablets, 768px and up) */\n  #total {\n  padding-top: 15px; }\n  #total h1 {\n    text-align: right;\n    margin-top: 50px;\n    color: #4a3082;\n    margin-bottom: 32px; }\n  #total h2 {\n    font-size: 26px;\n    color: #000;\n    text-align: right;\n    margin-bottom: 20px; }\n  #total h3 {\n    text-align: center;\n    color: #404040;\n    margin-bottom: 50px;\n    margin-top: 22px; }\n  #total .input-box {\n    padding-right: 50px; }\n  #total .total-price {\n    font-size: 50px;\n    text-align: right;\n    color: #000;\n    margin-top: -22px;\n    font-weight: 900; }\n  #total .mat-form-field-wrapper {\n    height: 60px !important; }\n  #total .mat-form-field-infix {\n    margin-top: -5px !important; }\n  #total .selected-services {\n    padding-left: 26px; }\n  #total .table {\n    position: relative; }\n  #total .table tr td {\n      font-size: 18px;\n      line-height: 18px;\n      border: none;\n      padding: 9px 0px 0px 0px;\n      font-weight: normal; }\n  #total .table tr td:nth-child(2n) {\n        text-align: right; }\n  #total .table:after {\n      content: '';\n      display: block;\n      position: absolute;\n      left: -30px;\n      top: -11%;\n      height: 111%;\n      width: 2px;\n      background: #959595; }\n  #total hr {\n    background: #959595;\n    height: 2px;\n    border: none;\n    margin-top: 72px;\n    margin-bottom: 14px; }\n  /* Small devices (tablets, 768px and up) */\n  @media only screen and (max-width: 768px) {\n  #total .selected-services {\n    padding-left: 15px; }\n  #total .input-box {\n    padding-right: 15px; } }\n"

/***/ }),

/***/ "./src/app/total/total.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TotalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation__ = __webpack_require__("./src/app/animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TotalComponent = /** @class */ (function () {
    function TotalComponent() {
        // show animation
        this.isShow = 'hide';
    }
    TotalComponent.prototype.onSubmit = function (totalForm) {
        this.isShow = 'show';
        console.log(this.isShow);
    };
    // scroll animate
    TotalComponent.prototype.scrollAnimate = function (element) {
        setTimeout(function () {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 250);
    };
    TotalComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TotalComponent.prototype, "additionallyFromData", void 0);
    TotalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-total',
            template: __webpack_require__("./src/app/total/total.component.html"),
            animations: [
                __WEBPACK_IMPORTED_MODULE_1__animation__["a" /* toggleHeight */]
            ],
            styles: [__webpack_require__("./src/app/total/total.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TotalComponent);
    return TotalComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map