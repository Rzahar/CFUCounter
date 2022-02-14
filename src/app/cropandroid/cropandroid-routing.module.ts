import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CropandroidPage } from './cropandroid.page';

const routes: Routes = [
  {
    path: '',
    component: CropandroidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CropandroidPageRoutingModule {}
