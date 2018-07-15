import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  constructor(private router: Router) {
  }

  signupUser(email: string, password: string) {
    console.log('in signupUser()', email, ' ', password);
    firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
      .then(
        result => console.log(result)
      )
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    console.log('in signupUser()', email, ' ', password);
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          firebase.auth().currentUser.getIdToken()
            .then(
              token => this.token = token
            );
          this.router.navigate(['/recipes']);
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  getToken() {
    firebase.auth().currentUser.getIdToken().then(
      token => this.token = token
    );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
