import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';

import { UploadComponent } from './pages/upload/upload.component';

export enum AppRoute {
  SHOES_NIKE = 'shoes-nike',
  SHOES_NIKE_DETT = 'shoes-nike-dett',
  UPLOAD = 'upload',
}

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppRoute.UPLOAD,
  },

  {
    path: AppRoute.UPLOAD,
    component: UploadComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
