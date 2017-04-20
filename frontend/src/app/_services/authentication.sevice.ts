import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
	public token: string;
	

	constructor(private http: Http, private router: Router) {
		// set token if saved in local storage
		var currentUser = JSON.parse(localStorage.getItem('currentUser'));
		this.token = currentUser && currentUser.token;
	}

	userLoggedIn() {
		return localStorage.getItem('currentUser');
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
					// set token property
					this.token = token;

					// store username and jwt token in local storage to keep user logged in between page refreshes
					localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

					
					// return true to indicate successful login
					return true;
				} else {
					// return false to indicate failed login
					return false;
				}
			});
	}

	logout() {
		// this.router.navigate(['/']);
		// this.userLoggedIn = false;
		this.token = null;
		localStorage.removeItem('currentUser');
	}
}