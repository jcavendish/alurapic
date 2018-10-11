import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from '../../core/validator/lower-case.validator';
import { UserTakenValidatorService } from '../../core/validator/user-taken.validator.service';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from '../../core/platform-detector/platform-detector.service';

@Component({
  templateUrl: 'signup.component.html',
  providers: [UserTakenValidatorService]
})
export class SignUpComponent implements OnInit {
  
  signupGroup: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private builder: FormBuilder,
    private userTakenValidatorService: UserTakenValidatorService,
    private signUpService: SignUpService,
    private router: Router,
    private platformDetector: PlatformDetectorService
  ) {}
  
  ngOnInit(): void {
    this.signupGroup = this.builder.group({
      email: ['', 
        [
          Validators.required,
          Validators.email
        ]
      ],
      fullName: ['', 
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(60)
        ]
      ],
      userName: ['', 
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(12),
          lowerCaseValidator
        ],
        this.userTakenValidatorService.userTakenValidation()
      ],
      password: ['', 
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16)
        ]
      ],
    })
    this.setEmailInputFocus();
  }

  signup() {
    const newUser: NewUser = this.signupGroup.getRawValue() as NewUser;
    this.signUpService.signup(newUser)
      .subscribe(
        () => this.router.navigate(['']),
        (err) => console.log(err));
  }

  setEmailInputFocus() {
    if (this.platformDetector.isPlatformBrowser())
            this.emailInput.nativeElement.focus();
  }

}