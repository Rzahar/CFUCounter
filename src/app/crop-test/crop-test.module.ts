import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CropTestPageRoutingModule } from './crop-test-routing.module';

import { CropTestPage } from './crop-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CropTestPageRoutingModule
  ],
  declarations: [CropTestPage]
})
export class CropTestPageModule {}
