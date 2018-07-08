import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'register',

  template: `
  
     <h3 align="center">Register Today!</h3>
   
  
 <form class="example-form" align ="center">
     <mat-form-field class="example-full-width">
       <input matInput [(ngModel)]="registerData.email" name="email" placeholder="Email" type="email" >
     </mat-form-field>
   
 <br>

     <mat-form-field class="example-full-width">
     <input matInput [(ngModel)]="registerData.password" name="password" placeholder="Password" type="password">
     </mat-form-field>

     <br>
 
     <mat-form-field class="example-full-width">
     <input matInput [(ngModel)]="registerData.name" name="fullname" placeholder="Full Name" type="name">
     </mat-form-field>
     <br>

     <mat-form-field class="example-full-width">
     <input matInput [(ngModel)]="registerData.address" name="address" placeholder="Address" type="address">
     </mat-form-field>
     <br>

     <mat-form-field class="example-full-width">
     <input matInput [(ngModel)]="registerData.phone" name="phone" placeholder="Phone Number" type="phone">
     
     </mat-form-field>
     <br>

   <br>
   <button  routerLink="" mat-raised-button color="primary" (click)="Post()">Register</button>

  
   </form>
   

  `,
 
})
export class RegisterComponent {
     registerData = {}


     constructor(private apiService: ApiService){}
     Post() {
         this.apiService.sendUserRegistration(this.registerData);
     }
}
