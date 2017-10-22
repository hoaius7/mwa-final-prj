import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs";

import {User} from "./user.model";
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {}

    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http.post('http://localhost:3000/user', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http.post('http://localhost:3000/user/signin', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    logout() {
        localStorage.clear();
    }
    //
    // isLoggedIn() {
    //     return localStorage.getItem('token') !== null;
    // }
}