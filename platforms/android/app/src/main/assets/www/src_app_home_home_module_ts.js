"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 1670);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 7206);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/crop/ngx */ 5715);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 1147);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ 8232);








let HomePage = class HomePage {
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
        /**
         * This function is used for taking photos
         */
        const options = {
            /**
             * Natives variables from the CameraModule in Ionic
             */
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData est soit encodée en base64 soit en URI (si Ios)
            // Ici, on est sous Android donc on est en base64 (DATA_URL):
            this.base64Image = 'data:image/jpeg;base64,' + imageData;
            this.cropImage(imageData);
        }, (err) => {
            // Handle error
        });
    }
    selectImage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            /**
             * Function which allow us to use the photo application in phone. Then, is will be used in order to launch the cropping function
             */
            const actionSheet = yield this.actionSheetController.create({
                header: "Cropping mod :",
                buttons: [
                    {
                        text: ' Use camera',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    cropImage(fileUrl) {
        /**
         * Allow us to show a cropped image using his path
         */
        this.crop.crop(fileUrl, { quality: 100 })
            .then(newPath => {
            this.showCroppedImage(newPath.split('?')[0]);
        }, error => {
            alert('Error Cropping image' + error);
        });
    }
    showCroppedImage(ImagePath) {
        /**
         * Function which allow us to retrieve the cropped photo thanks to base64Image. This variable will be used in html in order to  recover the cropped picture
         */
        this.isLoading = true;
        var copyPath = ImagePath;
        var splitPath = copyPath.split('/');
        var imageName = splitPath[splitPath.length - 1];
        var filePath = ImagePath.split(imageName)[0];
        this.file.readAsDataURL(filePath, imageName).then(base64 => {
            this.base64Image = base64;
            this.isLoading = false;
        }, error => {
            alert('Error in showing image' + error);
            this.isLoading = false;
        });
    }
    openLibrary() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            /**
             * This function will be used in order to retrieve a photo from the phone gallery, then it will be displayed in html thanks to base64Image
             */
            const options = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            };
            this.camera.getPicture(options).then((imageData) => {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64 (DATA_URL):
                this.base64Image = 'data:image/jpeg;base64,' + imageData;
            }, (err) => {
                // Handle error
            });
        });
    }
    ngOnInit() {
    }
};
HomePage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_2__.Crop },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ActionSheetController },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 7206:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.content {\n  background-image: url('bandeau.jpg');\n  height: 4em;\n  background-repeat: no-repeat;\n  width: 100%;\n}\n\n.result {\n  background-color: #4c8dff;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.content {\n  background-image: url('bandeau.jpg');\n  height: 4em;\n  background-repeat: no-repeat;\n  width: 100%;\n}\n\n.result {\n  background-color: #4c8dff;\n}\n\n.container {\n  max-width: 640px;\n  margin: 20px auto;\n}\n\nimg {\n  max-width: 100%;\n}\n\n.cropper-view-box,\n.cropper-face {\n  border-radius: 50%;\n}\n\nnav {\n  display: flex;\n  justify-content: space-evenly;\n}\n\nbutton {\n  padding: 10px;\n  background-color: lightblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUtBO0VBQ0Usb0NBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFDRSx5QkFBQTtBQUZGOztBQUlBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBSkY7O0FBT0E7RUFDRSxxQkFBQTtBQUpGOztBQU9BO0VBQ0Usb0NBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FBSkY7O0FBT0E7RUFDRSx5QkFBQTtBQUpGOztBQU9BO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUpGOztBQU9BO0VBQ0UsZUFBQTtBQUpGOztBQU9BOztFQUVFLGtCQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtBQUpGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFuZGVhdS5qcGdcIik7XHJcbiAgaGVpZ2h0OiA0ZW07XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJlc3VsdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjOGRmZjtcclxufVxyXG4jY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjZweDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBwIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcblxyXG4gIGNvbG9yOiAjOGM4YzhjO1xyXG5cclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNjb250YWluZXIgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9iYW5kZWF1LmpwZ1wiKTtcclxuICBoZWlnaHQ6IDRlbTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucmVzdWx0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM4ZGZmO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDY0MHB4O1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNyb3BwZXItdmlldy1ib3gsXHJcbi5jcm9wcGVyLWZhY2Uge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxubmF2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 1670:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title class=\"content\" >\r\n      CFU Counter App v.0.1\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content  [fullscreen]=\"true\">\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">What do you want to do? </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-button expand=\"block\" color=\"tertiary\" (click)=\"selectImage()\">\r\n    <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\r\n    Take photo\r\n  </ion-button>\r\n  <ion-button expand=\"block\" color=\"primary\" (click)=\"openLibrary()\">\r\n    <ion-icon slot=\"start\" name=\"image\"></ion-icon>\r\n    Open library\r\n  </ion-button>\r\n\r\n  <!-- C'est ici que s'afficherala photo -->\r\n  <ion-card *ngIf=\"base64Image!= null\" class=\"result\">\r\n    <ion-title color=\"lightgrey\" > CFU count : 55 </ion-title>\r\n    <img class=\"result-content\" [src]=\"base64Image\">\r\n\r\n  </ion-card>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map