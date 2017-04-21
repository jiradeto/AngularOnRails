import { Component } from '@angular/core'
import { Photo } from '../_models/photo'
import { Observable } from 'rxjs/Rx'
import { PhotoService } from '../_services/photo.service'
import { Router } from '@angular/router'
import { ActivatedRoute, Params } from '@angular/router'

@Component({
	templateUrl: require('./photo-edit.component.html'),
	providers: [PhotoService]
})

export class PhotoEditComponent {
	photo: Photo;
	submitted: boolean = false;
	errorMessage: string;
	constructor(private photoService: PhotoService, private route: ActivatedRoute, ) {
	}

	ngOnInit() {
		let photoRequest = this.route.params
			.flatMap((params: Params) =>
				this.photoService.getPhoto(params['id']));
		photoRequest.subscribe(response => this.photo = response)
	}

	updatePhoto(photo: Photo) {
		this.submitted = true;
		this.photoService.updatePhoto(photo)
			.subscribe(
			data => { return true; },
			error => {
				console.log(error);
				return Observable.throw(error);
			}
			);
	}

}