import { Component, OnInit } from '@angular/core';
import { AuthGuard } from './_guards/auth.guard'
import { AuthenticationService } from './_services/authentication.sevice'
import { ActivatedRoute } from '@angular/router'
import { MessageService } from './_services/message.service'

@Component({
	selector: 'root-app',
	templateUrl: require('./app.component.html')
})

export class AppComponent implements OnInit {
	pageTitle = "Angular-On-Rails"
	searchText = ""

	constructor(
		private messageService: MessageService,
		private route: ActivatedRoute,
		private auth: AuthGuard,
		private authService: AuthenticationService) {


	}

	sendMessage(q) {
		this.messageService.sendMessage(q);
	}

	ngOnInit() {
		console.log(this.route);
		console.log(this.route.snapshot.component);
	}

	logOut() {
		this.authService.logout();
	}

}
