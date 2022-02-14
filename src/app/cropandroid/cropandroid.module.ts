import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CropandroidPageRoutingModule } from './cropandroid-routing.module';

import { CropandroidPage } from './cropandroid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CropandroidPageRoutingModule
  ],
  declarations: [CropandroidPage]
})
export class CropandroidPageModule {}
