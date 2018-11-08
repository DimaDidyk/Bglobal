import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-returning-customer-page',
  templateUrl: './returning-customer-page.component.html',
  styleUrls: ['./returning-customer-page.component.scss']
})
export class ReturningCustomerPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  	var state = {};
	var title = 'Register';
	var url = '/sim-order/';
	history.pushState(state, title, url);
	window.onpopstate = function (e) { 
		console.log( e );
		e.preventDefault();
		var state = {};
		var title = 'Register';
		var url = '/sim-order/';
		history.pushState(state, title, url);
	}
  }

}
