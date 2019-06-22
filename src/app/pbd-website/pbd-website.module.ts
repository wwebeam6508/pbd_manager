import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PbdWebsitePage } from './pbd-website.page';

const routes: Routes = [
  {
    path: '',
    component: PbdWebsitePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PbdWebsitePage]
})
export class PbdWebsitePageModule {}
