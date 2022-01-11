import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Instanciation de la variable qui sert à récupérer le chemin de l'image qui sera affichée en fron
  base64Image: any;

  //constructeur camera nécessaire pour faire fonctionner l'appareil photo/librairie
  constructor(private camera: Camera) { }


  async takePhoto() {
    /**
     * Fonction spécifique dédiée à la prise de photo via sourceType:this.camera.PictureSourceType.CAMERA
     */
    const options: CameraOptions = {
      //Fonctions natives de CameraOption
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      // On ajoute l'option savetophotoalbum afin que l'utilisateur puisse garder la trace de la photo s'il souhaite la reconsulter
      saveToPhotoAlbum:true,
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

  async openLibrary() {
    /**
     * Fonction spécifique dédiée à la récupération de l'image en bibliothèque via sourceType:This.camera.PictureSourceType.PHOTOLIBRARY
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
}
