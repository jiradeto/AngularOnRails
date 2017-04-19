import { Component } from '@angular/core'
import { Photo } from './photo'
import { Observable } from 'rxjs/Rx'
import { PhotoService } from './photo.service'

@Component({
	templateUrl: require('./photo-new.component.html'),
	providers: [PhotoService]
})

export class PhotoNewComponent {
	submitted: boolean = false;
	photo: Photo = new Photo;

	constructor(private photoService: PhotoService) {

	}


	createPhoto(photo) {
		this.submitted = true;
		this.photoService.createProposal(photo)
			.subscribe(
			data => { return true; },
			error => {
				console.log("error post photo");
				console.log(error);
				return Observable.throw(error);
			}
			);
	}


}