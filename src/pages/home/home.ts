import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Slides) slides: Slides;

  slideOpts = {
    effect: 'slide'
  }

  constructor(public navCtrl: NavController) {

  }

  goTo(slide, index) {
    this.slides.slideTo(index, 2000)
  }
  
}
