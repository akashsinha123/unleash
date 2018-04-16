import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	constructor() {}


	// mobile functions ------------------------------
	openNav() {
		document.getElementById("myNav").style.width = "86%";
	}

	closeNav() {
		document.getElementById("myNav").style.width = "0%";
	}
	// mobile functions end ------------------------------

	
	// myFunction() {
	// 	var x = document.getElementById("myTopnav");
	// 	if (x.className === "topnav") {
	// 		x.className += " responsive";
	// 	} else {
	// 		x.className = "topnav";
	// 	}
	// }

	ngOnInit() {

	}



}

