import { Component, OnInit } from '@angular/core';

import { HomeSliderComponent } from '../home-slider/home-slider.component';
import { FlyFormComponent } from '../fly-form/fly-form.component';
import { DetailsFormComponent } from '../details-form/details-form.component';

@Component({
  selector: 'app-homa-page',
  templateUrl: './homa-page.component.html',
  styleUrls: ['./homa-page.component.scss']
})
export class HomaPageComponent implements OnInit {
	
  constructor() { }

  ngOnInit() {
  }

}
