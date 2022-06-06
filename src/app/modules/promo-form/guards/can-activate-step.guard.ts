import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {FormStepService} from "../services/form-step.service";
import {FormProviderService} from "../services/form-provider.service";

@Injectable({
  providedIn: 'any'
})
export class CanActivateStepGuard implements CanActivateChild {
  constructor(private stepService: FormStepService,
              private formProvider: FormProviderService,
              private router: Router) {
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.formProvider.loadCachedContent();
    const urlSegments = childRoute.url;
    const urlSegment = urlSegments[urlSegments.length - 1];
    const isAvailable = this.stepService.isCurrentStepAvailable(urlSegment.path);

    if(!isAvailable) {
      this.router.navigate(['promo-form']).then(() => {});
    }

    return isAvailable;
  }

}
