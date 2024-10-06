import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from './../../sheard/services/Orders/orders.service';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, NgModel, FormsModule, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {

  _Subscription !: Subscription
  private readonly _OrdersService = inject(OrdersService)
  private readonly _FormBuilder = inject(FormBuilder)
  private readonly _ActivatedRoute = inject(ActivatedRoute)

  isLoding: boolean = false;
  errorMessege: string = ""





  userData: FormGroup = this._FormBuilder.group({
    details: [null, [Validators.required, Validators.minLength(3)]],
    phone: [null, [Validators.required, Validators.pattern(/^(010|011|012)[0-9]{8}$/)]],
    city: [null, [Validators.required, Validators.minLength(3)]]
  })


  checkout() {


    this.isLoding = true

    console.log(this.userData.value);

    this._ActivatedRoute.paramMap.subscribe((p) => {
      let id = (p.get("id"));
      this._Subscription = this._OrdersService.Checkoutsession(id!, this.userData.value).subscribe({
        next: (res) => {
          if (res.status == "success") {
            this.isLoding = false
            console.log(res);

            window.open(res.session.url, "_self")
          }
        }, error: (err) => {
          console.log(err);

        }
      })

    })

  }

}
