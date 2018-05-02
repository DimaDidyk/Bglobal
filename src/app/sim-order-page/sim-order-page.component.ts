import { Component, OnInit } from '@angular/core';

import { BannerComponent } from '../banner/banner.component';
import { FormSimComponent } from '../form-sim/form-sim.component';
import { ClientInfoComponent } from '../client-info/client-info.component';
import { SimActiveFormComponent } from '../sim-active-form/sim-active-form.component';
import { AdditionallyComponent } from '../additionally/additionally.component';
import { TotalComponent } from '../total/total.component';
import { PaymentComponent } from '../payment/payment.component';


@Component({
  selector: 'app-sim-order-page',
  templateUrl: './sim-order-page.component.html',
  styleUrls: ['./sim-order-page.component.scss']
})
export class SimOrderPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
