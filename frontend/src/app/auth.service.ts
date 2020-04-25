import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private _registrationurl = "http://localhost:3000/auth/signup";
  private _loginurl = "http://localhost:3000/auth/signin";
  private _bookingurl = "http://localhost:3000/auth/book";


  constructor(private _http: HttpClient) { }

  booking(details) {
    return (this._http.post<any>(this._bookingurl, details))
  }

  registration(users) {
    return (this._http.post<any>(this._registrationurl, users))
  }

  login(users) {
    return (this._http.post<any>(this._loginurl, users));
  }

  isLoggedIn() {
    return !!sessionStorage.getItem('authtoken')
  }
  getToken() {

    console.log("Get token : " + sessionStorage.getItem('authtoken'));
    return sessionStorage.getItem('authtoken');

  }
}
