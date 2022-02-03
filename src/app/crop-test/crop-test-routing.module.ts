import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CropTestPage } from './crop-test.page';

const routes: Routes = [
  {
    path: '',
    component: CropTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CropTestPageRoutingModule {}
