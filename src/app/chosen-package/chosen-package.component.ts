import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { toggleHeight } from '../animation';


@Component({
  selector: 'app-chosen-package',
  templateUrl: './chosen-package.component.html',
  styleUrls: ['./chosen-package.component.scss']
})

export class ChosenPackageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
