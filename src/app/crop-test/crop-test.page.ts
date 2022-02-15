import { Component, OnInit } from '@angular/core';
import { Crop } from '@ionic-native/crop/ngx'
import {ActionSheetController} from "@ionic/angular";
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-crop-test',
  templateUrl: './crop-test.page.html',
  styleUrls: ['./crop-test.page.scss'],
})
export class CropTestPage implements OnInit {

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
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.cropImage(imageData)
    }, (err) => {
      // Handle error
    });
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
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
    await actionSheet.present();
  }

  cropImage(fileUrl) {
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

  ngOnInit(): void {
  }
}
