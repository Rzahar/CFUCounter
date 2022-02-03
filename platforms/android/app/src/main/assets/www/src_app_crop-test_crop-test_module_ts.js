"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_crop-test_crop-test_module_ts"],{

/***/ 3597:
/*!*******************************************************!*\
  !*** ./src/app/crop-test/crop-test-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CropTestPageRoutingModule": () => (/* binding */ CropTestPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _crop_test_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crop-test.page */ 9872);




const routes = [
    {
        path: '',
        component: _crop_test_page__WEBPACK_IMPORTED_MODULE_0__.CropTestPage
    }
];
let CropTestPageRoutingModule = class CropTestPageRoutingModule {
};
CropTestPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CropTestPageRoutingModule);



/***/ }),

/***/ 5223:
/*!***********************************************!*\
  !*** ./src/app/crop-test/crop-test.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CropTestPageModule": () => (/* binding */ CropTestPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _crop_test_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crop-test-routing.module */ 3597);
/* harmony import */ var _crop_test_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crop-test.page */ 9872);







let CropTestPageModule = class CropTestPageModule {
};
CropTestPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _crop_test_routing_module__WEBPACK_IMPORTED_MODULE_0__.CropTestPageRoutingModule
        ],
        declarations: [_crop_test_page__WEBPACK_IMPORTED_MODULE_1__.CropTestPage]
    })
], CropTestPageModule);



/***/ }),

/***/ 9872:
/*!*********************************************!*\
  !*** ./src/app/crop-test/crop-test.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CropTestPage": () => (/* binding */ CropTestPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Workspace_Projet_CounterCFU_node_modules_ngtools_webpack_src_loaders_direct_resource_js_crop_test_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./crop-test.page.html */ 5058);
/* harmony import */ var _crop_test_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crop-test.page.scss */ 5694);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let CropTestPage = class CropTestPage {
    constructor() { }
    ngOnInit() {
    }
};
CropTestPage.ctorParameters = () => [];
CropTestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-crop-test',
        template: _C_Workspace_Projet_CounterCFU_node_modules_ngtools_webpack_src_loaders_direct_resource_js_crop_test_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_crop_test_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CropTestPage);



/***/ }),

/***/ 5058:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/crop-test/crop-test.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>cropTest</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ 5694:
/*!***********************************************!*\
  !*** ./src/app/crop-test/crop-test.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcm9wLXRlc3QucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_crop-test_crop-test_module_ts.js.map