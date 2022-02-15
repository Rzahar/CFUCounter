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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Workspace_Projet_CounterCFU_node_modules_ngtools_webpack_src_loaders_direct_resource_js_crop_test_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./crop-test.page.html */ 5058);
/* harmony import */ var _crop_test_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crop-test.page.scss */ 5694);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/crop/ngx */ 4069);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 692);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ 7498);








let CropTestPage = class CropTestPage {
    constructor(camera, crop, actionSheetController, file) {
        this.camera = camera;
        this.crop = crop;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.croppedImagepath = "";
        this.isLoading = false;
        this.imagePickerOptions = {
            maximumImagesCount: 1,
            quality: 50
        };
    }
    pickImage(sourceType) {
        const options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            // let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.cropImage(imageData);
        }, (err) => {
            // Handle error
        });
    }
    selectImage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: "Mode cropping :",
                buttons: [
                    {
                        text: ' Utiliser l\'appareil photo',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        text: 'Annuler',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    cropImage(fileUrl) {
        this.crop.crop(fileUrl, { quality: 100 })
            .then(newPath => {
            alert('newPath.split:' + newPath.split('?')[0]);
            this.showCroppedImage(newPath.split('?')[0]);
        }, error => {
            alert('Error Cropping image' + error);
        });
    }
    showCroppedImage(ImagePath) {
        this.isLoading = true;
        var copyPath = ImagePath;
        var splitPath = copyPath.split('/');
        var imageName = splitPath[splitPath.length - 1];
        var filePath = ImagePath.split(imageName)[0];
        this.file.readAsDataURL(filePath, imageName).then(base64 => {
            this.croppedImagepath = base64;
            this.isLoading = false;
        }, error => {
            alert('Error in showing image' + error);
            this.isLoading = false;
        });
    }
    ngOnInit() {
    }
};
CropTestPage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_2__.Crop },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ActionSheetController },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File }
];
CropTestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Page de cropping -- PAGE DE TEST -- </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Que voulez-vous faire ? </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-button expand=\"block\" color=\"tertiary\" (click)=\"selectImage()\">\r\n    <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\r\n    Choisir une image\r\n  </ion-button>\r\n  <!-- C'est ici que s'afficherala photo -->\r\n  <ion-card *ngIf=\"croppedImagepath!= null\" class=\"result\">\r\n\r\n    <img class=\"result-content\" [src]=\"croppedImagepath\">\r\n\r\n  </ion-card>\r\n  </ion-content>\r\n");

/***/ }),

/***/ 5694:
/*!***********************************************!*\
  !*** ./src/app/crop-test/crop-test.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = ".container {\n  max-width: 640px;\n  margin: 20px auto;\n}\n\nimg {\n  max-width: 100%;\n}\n\n.cropper-view-box,\n.cropper-face {\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyb3AtdGVzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsa0JBQUE7QUFDRiIsImZpbGUiOiJjcm9wLXRlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA2NDBweDtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxufVxyXG5cclxuaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jcm9wcGVyLXZpZXctYm94LFxyXG4uY3JvcHBlci1mYWNlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_crop-test_crop-test_module_ts.js.map