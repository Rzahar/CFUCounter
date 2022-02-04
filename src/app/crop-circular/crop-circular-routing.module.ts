import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CropCircularPage } from './crop-circular.page';

const routes: Routes = [
  {
    path: '',
    component: CropCircularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CropCircularPageRoutingModule {}
