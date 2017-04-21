import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './_services/authentication.sevice'
import { ActivatedRoute, Router } from '@angular/router'
import { MessageService } from './_services/message.service'

@Component({
	selector: 'root-app',
	templateUrl: require('./app.component.html')
})

export class AppComponent implements OnInit {
	pageTitle = "Angular-On-Rails"
	searchText = ""
	showSearchField = true;

	constructor(
		private messageService: MessageService,
		private route: ActivatedRoute,
		private router: Router,
		private authService: AuthenticationService) {
		this.router.events.subscribe((event) => {
			
			if (route.firstChild) {
				this.showSearchField = route.firstChild.snapshot.data['hompage'];
			}
		});
	}

	sendMessage(q) {
		this.messageService.sendMessage(q);
	}

	ngOnInit() {

	}

	logOut() {
		this.authService.logout();
	}

}
