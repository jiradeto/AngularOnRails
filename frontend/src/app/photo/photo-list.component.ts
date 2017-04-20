import { Component } from '@angular/core'
import { Photo } from '../_models/photo'
import { Observable } from 'rxjs/Rx'
import { PhotoService } from '../_services/photo.service'
import { Router } from '@angular/router'

@Component({
	templateUrl: require('./photo-list.component.html'),
	providers: [PhotoService]
})

export class PhotoListComponent {
	photos: Photo[];
	errorMessage: string;
	constructor(private photoService: PhotoService, private router: Router) {
	}

	ngOnInit() {
		this.getPhotos();
	}

	getPhotos() {
		this.photoService.getPhotos().subscribe(
			photos => this.photos = photos,
			error => this.errorMessage = <any>error
		)
	}

	deletePhoto(photo, modal) {
		this.photoService.deletePhoto(photo)
			.subscribe(
			() => {
				modal.close;
				this.getPhotos();
				return true;
			}
			);
	}

	goEdit(photo) {
		let link = ['/photo', photo.id]
		this.router.navigate(link);
	}

}