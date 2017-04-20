
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../_services/authentication.sevice';

@Component({
	templateUrl: require('./login.component.html'),
})

export class LoginComponent implements OnInit {
	model: any = {};
	loading = false;
	error = '';
	returnUrl: string;

	constructor(
		private router: Router,
		private authenticationService: AuthenticationService
	)
	{ }



	ngOnInit() {
		this.authenticationService.logout();
		// this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
	}

	login() {
		this.loading = true;
		this.authenticationService.login(this.model.username, this.model.password)
			.subscribe(result => {
				if (result === true) {
					this.router.navigate(['/']);
				} else {
					this.error = 'Username or password is incorrect';
					this.loading = false;
				}
			});
	}
}
