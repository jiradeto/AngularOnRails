import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './_services/authentication.sevice'
import { ActivatedRoute, Router } from '@angular/router'
import { MessageService } from './_services/message.service'
import { TranslateService } from '@ngx-translate/core';

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
		private authService: AuthenticationService,
		private translate: TranslateService) {
		this.router.events.subscribe((event) => {

			translate.use('en');

			if (route.firstChild) {
				this.showSearchField = route.firstChild.snapshot.data['hompage'];
			}
		});
	}

	toggleLocale(locale: String) {
		console.log('yeah !!' + locale);
		this.translate.use(locale.toString());

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
