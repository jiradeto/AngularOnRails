import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Photo } from '../_models/photo';
import { AuthenticationService } from '../_services/authentication.sevice'

@Injectable()
export class PhotoService {
	private headers = new Headers();
	private options = new RequestOptions();

	private photoUrl = "/api/photos";
	constructor(
		private http: Http,
		private authenService: AuthenticationService) {

		this.headers.append('Content-Type', 'application/json');
		this.headers.append('Authorization', this.authenService.token);
		this.options.headers = this.headers;
	}


	getPhotos(): Observable<Photo[]> {
		return this.http.get(this.photoUrl, this.options)
			.map((response: Response) => <Photo[]>response.json())
			.catch(this.handleError)
	}

	updatePhoto(photo) {
		return this.http.put(this.photoUrl + "/" + photo.id, JSON.stringify(photo), this.options).map((res: Response) => res.json());
	}

	getPhoto(id: number) {
		return this.http.get(this.photoUrl + "/" + id, this.options)
			.map((response: Response) => <Photo>response.json())
			.catch(this.handleError)
	}

	deletePhoto(photo) {
		return this.http.delete(this.photoUrl + "/" + photo.id, this.options)
			.map((response: Response) => <Photo>response.json())
			.catch(this.handleError)
	}

	createPhoto(photo) {
		return this.http.post(this.photoUrl, JSON.stringify(photo), this.options).map((res: Response) => res.json());
	}

	private handleError(error: Response | any) {
		// In a real world app, we might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Observable.throw(errMsg);
	}
}
