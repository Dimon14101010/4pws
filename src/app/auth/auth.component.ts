import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {createRouterState} from "@angular/router/src/create_router_state";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user: any;
  values: any = {};
  constructor(private dbReg: AngularFireAuth, private router: Router) {
    this.user = dbReg.authState;
  }

  ngOnInit() {
  }
authUser (email, password) {
    this.dbReg.auth.signInWithEmailAndPassword(email, password)
      .then(done => console.log('auth done', done))
      .then(done => this.router.navigate(['/dashboard']));
  }
registerUser (email, password) {
    this.dbReg.auth.createUserWithEmailAndPassword(email, password)
      .then(done => console.log('register done', done))
      .then(done => this.router.navigate(['/dashboard']));

}
}
