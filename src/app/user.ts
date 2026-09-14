import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class User {
    apiURL = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http: HttpClient) {}

    getUsers(){
       return this.http.get(this.apiURL);
    }

}
