import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase'; //importing everything from 'firebase' package under the 'firebase' alias

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'shopping';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDMC2lgXI1668BuNxERlGq2juPWcuVaGbQ',
      authDomain: 'recipe-book-c65eb.firebaseapp.com'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
