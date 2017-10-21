import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { OktaAuthWrapper, AlertService } from 'app/shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  errormessage;
  username;
  password;

  constructor(private router: Router, private oauthService: OAuthService, private oktaAuthWrapper: OktaAuthWrapper, private alertservice: AlertService) {
  }
  
  get givenName() {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) {
      return null;
    }
    return claims['name'];
  }

  loginWithPassword() {
    this.errormessage=null;
    this.oktaAuthWrapper.login(this.username, this.password)
      .then(_ => this.routeaway())
      .catch(err => this.handleerror(err));
  }

  routeaway() {
    this.router.navigate(['/dashboard'])
  }

  handleerror(error: any) {
    this.errormessage = "Login Error. Please check your details are correct";
    //this.alertservice.danger("Login Error. Please check your details are correct");
  }

}
