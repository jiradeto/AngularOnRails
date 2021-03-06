import { Component, OnInit, OnDestroy } from '@angular/core'
import { Photo } from '../_models/photo'
import { Observable, Subscription } from 'rxjs/Rx'
import { PhotoService } from '../_services/photo.service'
import { MessageService } from '../_services/message.service'


@Component({
	templateUrl: require('./homepage.component.html'),
	providers: [PhotoService],
	
})
export class HomepageComponent implements OnInit, OnDestroy {
	searchText: string;
	photos: Photo[];
	errorMessage: string;
	subscription: Subscription;

	constructor(
		private messageService: MessageService,
		private service: PhotoService) {

		this.subscription = this.messageService.getMessage()
			.subscribe(message => {
				this.searchText = message.text;
			});
	}


	ngOnInit() {
		let timer = Observable.timer(0, 5000);
		timer.subscribe(() => this.getPhotos());
	}
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
	getPhotos() {
		this.service.getPhotos().subscribe(
			photos => this.photos = photos,
			error => this.errorMessage = <any>error
		)
	}

	// MOCK Data 

	// photos: Photo[] = [
	// 	{
	// 		title: 'Example 1',
	// 		url: 'http://era86.github.io/assets/images/posts/macbook.jpg',
	// 		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
	// 		price: 22200
	// 	},
	// 	{
	// 		title: 'Example 2',
	// 		url: 'http://kshitij-banerjee.github.io/Blog/images-hq/DevStack.jpeg',
	// 		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
	// 		price: 1000
	// 	}
	// ]
}