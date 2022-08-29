import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  signInForm!: FormGroup;
  @Output() signInCompleted: EventEmitter<boolean> = new EventEmitter(false);
  constructor(
    private fb: FormBuilder,
    private login: LoginService,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  signIn() {
    if (this.signInForm.valid) {
      this.login.authLogin(this.signInForm.value).subscribe((el) => {
        if (Array.isArray(el) && el.length > 0) {
          let user = el[0];
          user['token'] = 'asdasdasdasdasd';
          localStorage.setItem('user', JSON.stringify(user));
          this.signInCompleted.emit(true);
          this.toaster.success('log in successful');
        } else {
          this.toaster.error("User doesn't exist please go ahead and register");
        }
      });
    }
  }
}
