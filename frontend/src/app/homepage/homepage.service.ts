import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Photo } from '../photo/photo';

@Injectable()
export class HomepageService {
	private documentUrl = "/api/photos";
	constructor(private http: Http) {

	}

	getDocuments(): Observable<Photo[]> {
		return this.http.get(this.documentUrl)
			.map((response: Response) => <Photo[]>response.json())
			.catch(this.handleError)
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