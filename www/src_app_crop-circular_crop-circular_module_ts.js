"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_crop-circular_crop-circular_module_ts"],{

/***/ 3142:
/*!***************************************************************!*\
  !*** ./src/app/crop-circular/crop-circular-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CropCircularPageRoutingModule": () => (/* binding */ CropCircularPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _crop_circular_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crop-circular.page */ 5883);




const routes = [
    {
        path: '',
        component: _crop_circular_page__WEBPACK_IMPORTED_MODULE_0__.CropCircularPage
    }
];
let CropCircularPageRoutingModule = class CropCircularPageRoutingModule {
};
CropCircularPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CropCircularPageRoutingModule);



/***/ }),

/***/ 3325:
/*!*******************************************************!*\
  !*** ./src/app/crop-circular/crop-circular.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CropCircularPageModule": () => (/* binding */ CropCircularPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _crop_circular_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crop-circular-routing.module */ 3142);
/* harmony import */ var _crop_circular_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crop-circular.page */ 5883);







let CropCircularPageModule = class CropCircularPageModule {
};
CropCircularPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _crop_circular_routing_module__WEBPACK_IMPORTED_MODULE_0__.CropCircularPageRoutingModule
        ],
        declarations: [_crop_circular_page__WEBPACK_IMPORTED_MODULE_1__.CropCircularPage]
    })
], CropCircularPageModule);



/***/ }),

/***/ 5883:
/*!*****************************************************!*\
  !*** ./src/app/crop-circular/crop-circular.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CropCircularPage": () => (/* binding */ CropCircularPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Workspace_Projet_CounterCFU_node_modules_ngtools_webpack_src_loaders_direct_resource_js_crop_circular_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./crop-circular.page.html */ 612);
/* harmony import */ var _crop_circular_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crop-circular.page.scss */ 7083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




class Cropper {
    constructor(image, param2) {
    }
}
// @ts-ignore
let CropCircularPage = class CropCircularPage {
    constructor() {
    }
    ngOnInit() {
    }
};
CropCircularPage.ctorParameters = () => [];
CropCircularPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-crop-circular',
        template: _C_Workspace_Projet_CounterCFU_node_modules_ngtools_webpack_src_loaders_direct_resource_js_crop_circular_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_crop_circular_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CropCircularPage);



/***/ }),

/***/ 612:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/crop-circular/crop-circular.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.4.1/cropper.min.css' >\n<link rel=\"stylesheet\" href=\"css.css\">\n<script src='https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.4.1/cropper.min.js'></script>\n\n<div class=\"container\">\n  <h1>Crop a round image</h1>\n  <h3>Image</h3>\n  <div>\n    <img id=\"image\" src=\"https://thumbs.dreamstime.com/z/dessin-du-png-dans-le-logo-de-dossier-jpg-format-fichier-vecteur-141359130.jpg\" alt=\"Picture\">\n  </div>\n  <h3>Result</h3>\n  <p>\n    <button type=\"button\" id=\"button\">Crop</button>\n  </p>\n  <div id=\"result\"></div>\n</div>\n<script>\n  function getRoundedCanvas(sourceCanvas) {\n    var canvas = document.createElement('canvas');\n    var context = canvas.getContext('2d');\n    var width = sourceCanvas.width;\n    var height = sourceCanvas.height;\n    canvas.width = width;\n    canvas.height = height;\n    context.imageSmoothingEnabled = true;\n    context.drawImage(sourceCanvas, 0, 0, width, height);\n    context.globalCompositeOperation = 'destination-in';\n    context.beginPath();\n    context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);\n    context.fill();\n    return canvas;\n  }\n  window.addEventListener('DOMContentLoaded', function () {\n    let image = document.getElementById('image');\n    let button = document.getElementById('button');\n    let result = document.getElementById('result');\n    let croppable = false;\n    let cropper = new Cropper(image, {\n      aspectRatio: 1,\n      viewMode: 1,\n      ready: function () {\n        croppable = true;\n      },\n    });\n    button.onclick = function () {\n      let croppedCanvas;\n      let roundedCanvas;\n      let roundedImage;\n      if (!croppable) {\n        return;\n      }\n      // Crop\n      croppedCanvas = cropper.getCroppedCanvas();\n      // Round\n      roundedCanvas = getRoundedCanvas(croppedCanvas);\n      // Show\n      roundedImage = document.createElement('img');\n      roundedImage.src = roundedCanvas.toDataURL()\n      result.innerHTML = '';\n      result.appendChild(roundedImage);\n      console.log(roundedCanvas.toDataURL())\n    };\n  });\n\n</script>\n");

/***/ }),

/***/ 7083:
/*!*******************************************************!*\
  !*** ./src/app/crop-circular/crop-circular.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = ".container {\n  max-width: 640px;\n  margin: 20px auto;\n}\n\nimg {\n  max-width: 100%;\n}\n\n.cropper-view-box,\n.cropper-face {\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyb3AtY2lyY3VsYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBOztFQUVFLGtCQUFBO0FBQ0YiLCJmaWxlIjoiY3JvcC1jaXJjdWxhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDY0MHB4O1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNyb3BwZXItdmlldy1ib3gsXHJcbi5jcm9wcGVyLWZhY2Uge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_crop-circular_crop-circular_module_ts.js.map