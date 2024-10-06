import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgModel, NgModelGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddressService } from '../../sheard/services/address/address.service';
import { AuthenticationService } from '../../sheard/services/Authentication/authentication.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, TranslateModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  isLoding: boolean = false;
  errorMessege: string = ""
  private readonly _FormBuilder = inject(FormBuilder)
  private readonly _AddressService = inject(AddressService)
  private readonly _AuthenticationService = inject(AuthenticationService)


  addresForm: FormGroup = this._FormBuilder.group({
    name: [null, [Validators.required, Validators.minLength(3)]],
    details: [null, [Validators.required, Validators.minLength(3)]],
    phone: [null, [Validators.required, Validators.pattern(/^(010|011|012)[0-9]{8}$/)]],
    city: [null, [Validators.required, Validators.minLength(3)]],
  })


  rolse: string = ""
  userName: string = ""
  ngOnInit(): void {
    if (localStorage.getItem("userToken") !== null) {
      this._AuthenticationService.JWT()
      this.userName = this._AuthenticationService.userData.name
      this.rolse = this._AuthenticationService.userData.role
    }


  }

  addAddres() {


    this.isLoding = true;
    if (this.addresForm.valid) {
      this._AuthenticationService.JWT()

      if (this._AuthenticationService.userData) {
        this._AddressService.addAddres(this.addresForm.value).subscribe({
          next: (res) => {
            console.log(res);

          }, error: (err) => {
            console.log(err);

          }
        })
      }

    }


  }

}


