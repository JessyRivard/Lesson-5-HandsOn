import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Chapter_1Page } from './chapter-1';

@NgModule({
  declarations: [
    Chapter_1Page,
  ],
  imports: [
    IonicPageModule.forChild(Chapter_1Page),
  ],
})
export class Chapter_1PageModule {}
