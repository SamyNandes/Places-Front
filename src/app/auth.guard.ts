import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthgoogleService } from './authgoogle.service';
import { profile } from './landing-pages/profile.model';
export const authGuard: CanActivateFn = (route, state) => {

  const authService: AuthgoogleService = inject(AuthgoogleService)
  const router: Router = inject(Router)
  const profile: profile = authService.getLoggedProfile();
  if(profile){
    return true
  }

  router.navigate([''])

  return false;

};
