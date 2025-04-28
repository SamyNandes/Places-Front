import { Injectable, signal } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { auth } from './auth.config';
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthgoogleService {

  profile = signal<any>(null);

  constructor(
    private oauthService: OAuthService,
    private router: Router,
  ) {
    this.initConfiguration();
   }


  initConfiguration(){
    this.oauthService.configure(auth);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if(this.oauthService.hasValidIdToken()){
        this.profile.set(this.oauthService.getIdentityClaims());
      }
    });
  }

  login(){
    this.oauthService.initImplicitFlow();
  }

  logout(){
    this.oauthService.revokeTokenAndLogout();
    this.oauthService.logOut();
    this.profile.set(null);
    this.router.navigate([''])
  }

  getLoggedProfile(){
    return this.profile();
  }
}
