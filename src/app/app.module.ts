import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {MatCardModule, MatButtonModule, MatToolbarModule, MatInputModule, MatListModule } from '@angular/material';
import {MessagesComponent} from './messages.component';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';
import { UsersComponent } from './users.component';
import  { DashBoardComponent } from './dashboard.component';

const routes = [
  { path: "register", component:RegisterComponent},
  { path: "login", component:LoginComponent},
  {path: "users", component:UsersComponent},
  { path: "profile/:id", component:ProfileComponent},
  { path: "dashboard", component:DashBoardComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    UsersComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
     HttpModule,
      MatButtonModule,
       MatCardModule,
        MatToolbarModule,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,
        MatInputModule,
        FormsModule,
        MatListModule
    

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
