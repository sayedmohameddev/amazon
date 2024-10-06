import { Subscription } from 'rxjs';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../sheard/services/Authentication/authentication.service';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, RouterLink, TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  _Subscription !: Subscription
  errorMessege: string = ""
  isLoding: boolean = false

  constructor() { }
  private readonly _Router = inject(Router)
  private readonly _FormBuilder = inject(FormBuilder)
  private readonly _AuthenticationService = inject(AuthenticationService)

  loginForm: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.pattern(/^[A-Z][0-9]{7}/)]],
  })

  loginSupmet() {
    if (this.loginForm.valid) {
      this.isLoding = true

      this._Subscription = this._AuthenticationService.setloginForm(this.loginForm.value).subscribe({
        next: (res) => {

          if (typeof localStorage !== "undefined") {
            localStorage.setItem("userToken", res.token)
            this._AuthenticationService.JWT()
            this._Router.navigate(["/home"])
            this.isLoding = false

          }
        }, error: (err) => {
          this.isLoding = false
          this.errorMessege = err.error.message

        }
      })

    }
  }

  ngOnDestroy(): void {
    this._Subscription?.unsubscribe()
  }



}
