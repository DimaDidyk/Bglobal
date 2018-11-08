import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-returning-customer-page',
  templateUrl: './returning-customer-page.component.html',
  styleUrls: ['./returning-customer-page.component.scss']
})
export class ReturningCustomerPageComponent implements OnInit {

	constructor(){}

	ngOnInit() {
		let packageData = JSON.parse(localStorage.getItem('packageData'));
		console.log( packageData['Name'] );
		var state = {};
		var title = 'Register';
		var url = '/sim-order/'+packageData['Name'];
		history.pushState(state, title, url);
		window.onpopstate = function (e) { 
			e.preventDefault();
			history.pushState(state, title, url);
		}
	}
}
