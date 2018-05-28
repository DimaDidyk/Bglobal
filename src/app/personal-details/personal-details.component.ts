import { Component, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {

	valueProgress:number = 55;
	colorProgress:string = "green";

	constructor() { }

	ngOnInit() {
		if( this.valueProgress <= 75 ){
			this.colorProgress = "orange";
		}
		if( this.valueProgress <= 50 ){
			this.colorProgress = "red";
		}
	}

}
