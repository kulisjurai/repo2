import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user/User.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    public userService: UserService,
    public _router: Router,
    private _notificationService: ToastrService
  ) {}

  canActivate(route: any, state: RouterStateSnapshot) {
    console.log(this.userService.isAuthenticated);
    if (!this.userService.isAuthenticated()) {
      this._notificationService.error(
        'Za ovu akciju trebate biti prijavljeni.'
      );
      this._router.navigate(['/login'], {
        queryParams: { returnUrl: state.url },
      });

      return false;
    }

    return true;
  }
}
