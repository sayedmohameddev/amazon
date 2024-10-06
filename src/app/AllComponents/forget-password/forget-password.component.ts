import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgModel, ReactiveFormsModule } from '@angular/forms';
import { ForgetpasswordService } from '../../sheard/services/Authentication/forgetpassword.service';
import { AuthenticationService } from '../../sheard/services/Authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [ReactiveFormsModule, TranslateModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {

  constructor() { }
  errorMessage !: string
  isloding: boolean = false
  isSendCode: boolean = false;
  isRestNewPassword: boolean = false
  _Subscription !: Subscription


  private readonly _Router = inject(Router)
  private readonly _FormBuilder = inject(FormBuilder)
  private readonly _ForgetpasswordService = inject(ForgetpasswordService)
  private readonly _AuthenticationService = inject(AuthenticationService)

  // ============== >> forget pass forms 
  sendEmailForm: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
  })

  verifyCodeForm: FormGroup = this._FormBuilder.group({
    resetCode: [null, [Validators.required]],
  })

  resetPasswordForm: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    newPassword: [null, [Validators.required, Validators.pattern(/^[A-Z][0-9]{7}/)]],
  })



  sendEmailData() {

    this.isloding = true
    this.resetPasswordForm.get("email")?.patchValue(this.sendEmailForm.get("email")?.value)

    this._Subscription = this._ForgetpasswordService.sendEmail(this.sendEmailForm.value).subscribe({
      next: (res) => {
        this.isloding = false
        this.isSendCode = true
      }
    })
  }

  verifyCodelData() {
    this.isloding = true

    this._Subscription = this._ForgetpasswordService.verifyCode(this.verifyCodeForm.value).subscribe({
      next: (res) => {
        this.isloding = false
        this.isSendCode = false
        this.isRestNewPassword = true
      }


    })
  }

  restNewPass() {
    this.isloding = true
    this._Subscription = this._ForgetpasswordService.resetPassword(this.resetPasswordForm.value).subscribe({
      next: (res) => {
        this.isloding = false
        if (typeof localStorage !== "undefined") {
          localStorage.setItem("userToken", res.token)
          this._AuthenticationService.JWT()
          this._Router.navigate(["home"])

        }
      }


    })
  }

  ngOnDestroy(): void {

    this._Subscription?.unsubscribe()
  }


}
