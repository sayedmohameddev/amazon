import { Subscription } from 'rxjs';
import { AuthenticationService } from './../../sheard/services/Authentication/authentication.service';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, TranslateModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  _Subscription !: Subscription
  errorMessege: string = ""
  isLoding: boolean = false
  constructor() { }

  private readonly _FormBuilder = inject(FormBuilder)
  private readonly _AuthenticationService = inject(AuthenticationService)

  RegisterForm: FormGroup = this._FormBuilder.group({
    name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.pattern(/^[A-Z][0-9]{7}/)]],
    rePassword: [null, [Validators.required, Validators.pattern(/^[A-Z][0-9]{7}/)]],
    phone: [null, [Validators.required, Validators.pattern(/^(010|011|012)[0-9]{8}$/)]],
  }, { validators: this.cnofirmPasword })

  // =============>> COUSTME VALIDITION
  cnofirmPasword(kay: AbstractControl) {
    if (kay.get('password')?.value === kay.get('rePassword')?.value) return null
    else return { "passMatched": true }
  }



  RegisterSupmet() {

    if (this.RegisterForm.valid) {
      this.isLoding = true
      this._Subscription = this._AuthenticationService.setRegisterForm(this.RegisterForm.value).subscribe({
        next: (res) => {
          this.isLoding = false
        }, error: (err) => {
          this.errorMessege = err.error.message
          this.isLoding = false

        }
      })
    }
  }


  ngOnDestroy(): void {
    this._Subscription?.unsubscribe()
  }
}

