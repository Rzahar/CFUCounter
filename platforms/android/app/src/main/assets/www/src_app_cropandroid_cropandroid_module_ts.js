"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_cropandroid_cropandroid_module_ts"],{

/***/ 1023:
/*!***********************************************************!*\
  !*** ./src/app/cropandroid/cropandroid-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CropandroidPageRoutingModule": () => (/* binding */ CropandroidPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _cropandroid_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cropandroid.page */ 9801);




const routes = [
    {
        path: '',
        component: _cropandroid_page__WEBPACK_IMPORTED_MODULE_0__.CropandroidPage
    }
];
let CropandroidPageRoutingModule = class CropandroidPageRoutingModule {
};
CropandroidPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CropandroidPageRoutingModule);



/***/ }),

/***/ 7473:
/*!***************************************************!*\
  !*** ./src/app/cropandroid/cropandroid.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CropandroidPageModule": () => (/* binding */ CropandroidPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _cropandroid_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cropandroid-routing.module */ 1023);
/* harmony import */ var _cropandroid_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cropandroid.page */ 9801);







let CropandroidPageModule = class CropandroidPageModule {
};
CropandroidPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cropandroid_routing_module__WEBPACK_IMPORTED_MODULE_0__.CropandroidPageRoutingModule
        ],
        declarations: [_cropandroid_page__WEBPACK_IMPORTED_MODULE_1__.CropandroidPage]
    })
], CropandroidPageModule);



/***/ }),

/***/ 9801:
/*!*************************************************!*\
  !*** ./src/app/cropandroid/cropandroid.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CropandroidPage": () => (/* binding */ CropandroidPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Workspace_Projet_CounterCFU_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cropandroid_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./cropandroid.page.html */ 9500);
/* harmony import */ var _cropandroid_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cropandroid.page.scss */ 136);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let CropandroidPage = class CropandroidPage {
    constructor() { }
    ngOnInit() {
    }
};
CropandroidPage.ctorParameters = () => [];
CropandroidPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-cropandroid',
        template: _C_Workspace_Projet_CounterCFU_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cropandroid_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cropandroid_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CropandroidPage);



/***/ }),

/***/ 9500:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/cropandroid/cropandroid.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>cropandroid</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ 136:
/*!***************************************************!*\
  !*** ./src/app/cropandroid/cropandroid.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcm9wYW5kcm9pZC5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_cropandroid_cropandroid_module_ts.js.map