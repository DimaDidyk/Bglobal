import { Component, OnInit, ViewChild  } from '@angular/core';
// import { MatMenuModule } from '@angular/material/menu';
import { MatMenuTrigger, MatMenuModule } from '@angular/material/';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


 

export class HeaderComponent implements OnInit {

	// 
	@ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
	openMenu() {
		this.trigger.openMenu();
	}
	closeMenu() {
		this.trigger.closeMenu();
	}

	// header mobile menu
	status: boolean = false;
	clickSendwich(){
	    this.status = !this.status;       
	}

	constructor() { }

	ngOnInit() {
	}

}
