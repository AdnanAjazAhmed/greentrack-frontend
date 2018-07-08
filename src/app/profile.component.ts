import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'profile',

  template: `
  <mat-card> 
  <mat-card-header>
     <h3 align="center">My Profile</h3>
     </mat-card-header>
     <mat-card-content>
    <mat-list>
    <mat-list-item>Email: {{profile?.email}} </mat-list-item>
    <mat-list-item>Name: {{profile?.name}} </mat-list-item>
    <mat-list-item>Phone Number: {{profile?.phone}} </mat-list-item>
    <mat-list-item>Address: {{profile?.address}} </mat-list-item>
 
    </mat-list>
     </mat-card-content>
  

   
 
   </mat-card>

  `,
 
})
export class ProfileComponent {
     


     constructor(private apiService: ApiService, private route: ActivatedRoute){}
     
     
     profile

     ngOnInit(){
         let id = this.route.snapshot.params.id;
         this.apiService.getProfile(id).subscribe(data => this.profile = data.json())
             
         
     }
}
