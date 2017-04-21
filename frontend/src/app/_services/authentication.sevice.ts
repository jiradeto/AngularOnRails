import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
	public token: string;


	constructor(private http: Http, private router: Router) {
		console.log(localStorage.getItem('currentUser'));
		var currentUser = JSON.parse(localStorage.getItem('currentUser'));
		this.token = currentUser && currentUser.token;
	}

	userLoggedIn() {
		return this.token !== null;
	}

	login(username: string, password: string): Observable<boolean> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post('/api/auth', JSON.stringify({ username: username, password: password }), options)
			.map((response: Response) => {

				console.log(response);
				// login successful if there's a jwt token in the response
				let token = response.json() && response.json().token;
				if (token) {

					this.token = token;
					localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

					return true;
				} else {
					
					return false;
				}
			});
	}

	logout() {

		this.token = null;
		localStorage.removeItem('currentUser');
	}
}