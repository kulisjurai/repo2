import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { UserService } from 'src/app/shared/services/user/User.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationValidators } from 'src/app/shared/services/validators/registration.validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  errors: any;

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      RegistrationValidators.cannotContainSpace,
    ]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      RegistrationValidators.cannotContainSpace,
      RegistrationValidators.mustContainMonkey,
      RegistrationValidators.mustContainDot,
    ]),
    address: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      RegistrationValidators.cannotContainSpace,
    ]),
  });

  constructor(
    private router: Router,
    private userService: UserService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {}

  // form getters
  get username() {
    return this.form.get('username');
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }
  get email() {
    return this.form.get('email');
  }

  get address() {
    return this.form.get('address');
  }

  get password() {
    return this.form.get('password');
  }

  loginRoute() {
    this.router.navigateByUrl('login');
  }

  createUser() {
    this.userService
      .createUserService({
        username: this.username?.value,
        firstName: this.firstName?.value,
        lastName: this.lastName?.value,
        email: this.email?.value,
        address: this.address?.value,
        password: this.password?.value,
      })
      .subscribe(
        (response: any) => {
          this.toastrService.success(response.msg);
          console.log(response);
          this.loginRoute();
        },
        (error: any) => {
          this.errors = error;
          if (this.errors) {
            console.log(this.errors.error.msg);
            this.toastrService.error(
              `${this.errors.error.msg}. Pokušajte s novim unosom`
            );
          }
        }
      );
  }
}
