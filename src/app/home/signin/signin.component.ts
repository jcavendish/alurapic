import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from '../../core/platform-detector/platform-detector.service';

@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {
  
  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;
  
  constructor(
    private builder: FormBuilder,
    private loginService: AuthService,
    private router: Router,
    private platformDetector: PlatformDetectorService
  ) {}
  
  ngOnInit(): void {
    this.loginForm = this.builder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.setNameInputFocus();
  }

  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.loginService.authenticate(userName, password)
      .subscribe(
        () => this.router.navigate(['user', userName]),
        (err) => {
          console.log(err);
          this.loginForm.reset();
          this.setNameInputFocus();
          alert('Invalid user name or password!');
        });
  }

  setNameInputFocus() {
    if (this.platformDetector.isPlatformBrowser())
            this.userNameInput.nativeElement.focus();
  }
}