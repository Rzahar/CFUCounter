import { Component, OnInit } from '@angular/core';
import { Crop } from '@ionic-native/crop/ngx'
import {ActionSheetController} from "@ionic/angular";
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  base64Image: string
  croppedImagepath = "";
  isLoading = false;
  sourceType: any;
  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };

  constructor(
    private camera: Camera,
    private crop: Crop,
    public actionSheetController: ActionSheetController,
    private file: File
  ) { }

  pickImage(sourceType) {
    /**
     * This function is used for taking photos
     */
    const options: CameraOptions = {
      /**
       * Natives variables from the CameraModule in Ionic
       */
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData est soit encodée en base64 soit en URI (si Ios)
      // Ici, on est sous Android donc on est en base64 (DATA_URL):
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.cropImage(imageData)
    }, (err) => {
      // Handle error
    });
  }

  async selectImage() {
    /**
     * Function which allow us to use the photo application in phone. Then, is will be used in order to launch the cropping function
     */
    const actionSheet = await this.actionSheetController.create({
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
    await actionSheet.present();
  }

  cropImage(fileUrl) {
    /**
     * Allow us to show a cropped image using his path
     */
    this.crop.crop(fileUrl, { quality:100 })
      .then(
        newPath => {
          this.showCroppedImage(newPath.split('?')[0]);

        },
        error => {
          alert('Error Cropping image' + error);
        }
      );
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
  async openLibrary() {
    /**
     * This function will be used in order to retrieve a photo from the phone gallery, then it will be displayed in html thanks to base64Image
     */
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }
  ngOnInit(): void {
  }
}
