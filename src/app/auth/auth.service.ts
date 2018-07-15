import {Injectable} from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
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
        result => console.log(result)
      )
      .catch(
        error => console.log(error)
      );
  }
}
