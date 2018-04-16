import {
	Component,
	OnInit
} from '@angular/core';

@Component({
	selector: 'home',
	styleUrls: [ './home.component.css' ],
	templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

	constructor() {}

	people: any[] = [
	{
		"name": "Douglas  Pace"
	},
	{
		"name": "Mcleod  Mueller"
	},
	{
		"name": "Day  Meyers"
	},
	{
		"name": "Aguirre  Ellis"
	},
	{
		"name": "Cook  Tyson"
	}
	];

	public ngOnInit() {
	}

}
