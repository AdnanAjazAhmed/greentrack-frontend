import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ApiService {
    constructor(private http: Http){}
    
    messages = []
    users = []
    path= 'http://localhost:3000'
    authpath = 'http://localhost:3000/auth';

    getMessage() {
        this.http.get(this.path + '/posts').subscribe(res => {
            this.messages = res.json()
        })
    }

    postLocation(location) {
        this.http.post(this.path + '/location', location).subscribe(res => {
            this.messages = res.json()
        })
    }


    getUsers() {
        this.http.get(this.path + '/users').subscribe(res => {
            this.users = res.json()
        })
    }

    sendUserRegistration(regData) {
        this.http.post(this.authpath + '/register', regData).subscribe(res => {
         
        })
    }

    loginUser(loginData) {
        this.http.post(this.authpath + '/login', loginData).subscribe(res => {
          console.log(res);
          localStorage.setItem('token', res.json().token)
        })
    }

    getProfile(id){
      return this.http.get(this.path + '/profile/' + id)
}
      
      getLocation(){
          return this.http.get(this.path + '/dashboard')
      }
    
    
}