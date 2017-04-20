import { Component } from '@angular/core';
import { AuthGuard } from './_guards/auth.guard'
import { AuthenticationService } from './_services/authentication.sevice'

@Component({
	selector: 'root-app',
	templateUrl: require('./app.component.html')
})

export class AppComponent {
	pageTitle = "Angular-On-Rails"
	
	constructor(
		private auth: AuthGuard,
		private authService: AuthenticationService)
	{ }

	logOut() {
		this.authService.logout();
	}

}
