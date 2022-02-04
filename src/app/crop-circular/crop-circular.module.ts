import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CropCircularPageRoutingModule } from './crop-circular-routing.module';

import { CropCircularPage } from './crop-circular.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CropCircularPageRoutingModule
  ],
  declarations: [CropCircularPage]
})
export class CropCircularPageModule {}
