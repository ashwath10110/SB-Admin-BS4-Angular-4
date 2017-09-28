import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from './../services/data.service';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

	constructor(public router: Router, private _dataService: DataService) {

		this._dataService.getUsers()
			.subscribe(res => this.users = res);
	}

	ngOnInit() {
		if (this.router.url === '/') {
			this.router.navigate(['/dashboard']);
		}
	}

	users: Array<any>;
}
