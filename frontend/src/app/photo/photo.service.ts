import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Photo } from './photo';

@Injectable()
export class PhotoService {
	private photoUrl = "/api/photos";
	constructor(private http: Http) {

	}

	getPhotos(): Observable<Photo[]> {
		return this.http.get(this.photoUrl)
			.map((response: Response) => <Photo[]>response.json())
			.catch(this.handleError)
	}



	getPhoto(id: number) {
		return this.http.get(this.photoUrl + "/" + id)
			.map((response: Response) => <Photo>response.json())
			.catch(this.handleError)
	}

	deletePhoto(photo) {
		return this.http.delete(this.photoUrl + "/" + photo.id)
			.map((response: Response) => <Photo>response.json())
			.catch(this.handleError)
	}

	createPhoto(photo) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(this.photoUrl, JSON.stringify(photo), options).map((res: Response) => res.json());
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
