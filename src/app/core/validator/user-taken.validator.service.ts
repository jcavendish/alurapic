import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { SignUpService } from '../../home/signup/signup.service';
import { debounceTime, switchMap, map, first } from 'rxjs/operators';

@Injectable()
export class UserTakenValidatorService {

  constructor(private signupService: SignUpService) {}

  userTakenValidation() {
    return (control: AbstractControl) => 
      control.valueChanges
        .pipe(debounceTime(300))
        .pipe(switchMap(userName =>
          this.signupService.isUserTaken(userName)
        ))
        .pipe(map(isTaken => isTaken ? {userTakenValidation: true} : null))
        .pipe(first());
  }
}