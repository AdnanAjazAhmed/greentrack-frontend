import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'login',

  template: `
  <mat-card> 
     <h3 align="center">Login Now!</h3>
   
  
 <form class="example-form" align ="center">
     <mat-form-field class="example-full-width">
       <input matInput [(ngModel)]="loginData.email" name="email" placeholder="Email" type="email" >
     </mat-form-field>
   
 <br>
 
     <mat-form-field class="example-full-width">
     <input matInput [(ngModel)]="loginData.password" name="password" placeholder="Password" type="password">
     </mat-form-field>
     <br>
   <br>
   <button  routerLink="/dashboard" mat-raised-button color="primary" (click)="Post()">Login</button>

  
   </form>
   </mat-card>

  `,
 
})
export class LoginComponent {
     loginData = {}


     constructor(private apiService: ApiService){}
     Post() {
         this.apiService.loginUser(this.loginData);
     }
}
