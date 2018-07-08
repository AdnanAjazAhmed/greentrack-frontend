import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'dashboard',
  template: `<h2>the dashboard works </h2>
  
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.1.5/angular.min.js"></script>
  <script src="https://rawgithub.com/arunisrael/angularjs-geolocation/master/dist/angularjs-geolocation.min.js"></script>
</head>
<body ng-app="location">
<div ng-controller="mainCtrl">
  <p>Your location is: {{coords}}</p>
</div>
<button>My Current Location</button>
</body>
  `,
})


export class DashBoardComponent {


  constructor(private apiService: ApiService,){}
  
  postLocation = ''

  Post(){
    console.log(this.postLocation);
  }
}
