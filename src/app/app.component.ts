import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    // Your web app's Firebase configuration
    const config = {
      apiKey: 'AIzaSyBV-OAv6gVsCTrFBo5zoEXOKSrC8NNXzT4',
      authDomain: 'blog-x-e3f67.firebaseapp.com',
      databaseURL: 'https://blog-x-e3f67.firebaseio.com',
      projectId: 'blog-x-e3f67',
      storageBucket: 'blog-x-e3f67.appspot.com',
      messagingSenderId: '326031950317'
    };
    firebase.initializeApp(config);
  }
}
