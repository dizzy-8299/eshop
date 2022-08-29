import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  UntypedFormBuilder,
  FormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { LoginService } from 'src/app/core/services/login/login.service';
import { confirmPassword } from 'src/app/shared/validators/confirmpassword.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpForm!: UntypedFormGroup;
  user: any;
  @Input()
  actionName: string = '';

  @Output()
  signUpCompleted: EventEmitter<boolean> = new EventEmitter(false);

  constructor(
    private fb: UntypedFormBuilder,
    private auth: AuthService,
    private login: LoginService
  ) {}

  ngOnInit(): void {
    this.createFormStructure();
    this.user = this.auth.getUser();
    if (this.user != null) {
      this.signUpForm.patchValue(this.user);
    }
  }

  ngAfterViewInit() {
    console.log('actionName', this.actionName);
  }

  createFormStructure() {
    this.signUpForm = this.fb.group(
      {
        firstName: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(10),
            Validators.pattern('^[a-zA-z]+$'),
          ],
        ],
        lastName: [
          '',
          [
            Validators.required,
            Validators.maxLength(10),
            Validators.pattern('^[a-zA-z]+$'),
          ],
        ],
        mobileNumber: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10),
          ],
        ],
        dateofBirth: ['', []],
        emailId: ['', [Validators.required, Validators.minLength(2)]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(10),
          ],
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(10),
          ],
        ],
        isFormAccept: [false, [Validators.required]],
        address: this.fb.group({
          line1: ['', []],
          line2: ['', []],
          city: ['', []],
          state: ['', []],
          zipCode: ['', []],
        }),
      },
      { validator: confirmPassword }
    );
  }

  onFormSubmit() {
    if (this.signUpForm.valid) {
      this.login.registerUser(this.signUpForm.value).subscribe((el) => {
        console.log('response', el);
        this.signUpCompleted.emit(true);
      });
    }
    console.log('formValue', this.signUpForm);
  }
}
