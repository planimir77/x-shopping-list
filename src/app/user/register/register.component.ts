import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  focus;
  focus1;
  focus2;

  form: FormGroup;
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      rePassword: new FormControl('', [
        Validators.required,
      ]),
        
    });
  }

  public checkError = (controlName: string, errorName: string) => {
    if (this.form.touched) {

      return this.form.controls[controlName].hasError(errorName);
    }
  }
  get username() { return this.form.get('username') };
  get email() { return this.form.get('email') };
  get password() { return this.form.get('password') };
  get rePassword() { return this.form.get('rePassword') };

  onSubmit(): void {
    const data = this.form.value;
    this.isLoading = true;

    this.authService.register(data).subscribe({
      next: (response) => {
        console.log(response);
        this.isLoading = false;
        this.router.navigate(['/user/login']);
      },
      error: (err) => {
        this.isLoading = false;
        console.log(err);
      }
    });
  }

}
