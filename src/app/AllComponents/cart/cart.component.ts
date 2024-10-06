import { Subscription } from 'rxjs';
import { icart } from '../../sheard/interFaces/icart';
import { CartService } from './../../sheard/services/cart/cart.service';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})

export class CartComponent {

  private readonly _ToastrService = inject(ToastrService)
  private readonly _Router = inject(Router)
  private readonly _CartService = inject(CartService)


  count !: number
  _cartId: string = ""
  _Subscription !: Subscription
  _totalprice: string = ""
  _allProductsCart: icart[] | any = [];


  ngOnInit(): void {
    this._Subscription = this._CartService.getAllproductInCart().subscribe({
      next: (res) => {
        this._allProductsCart = res.data.products;
        this._totalprice = res.data.totalCartPrice
        this._cartId = res.data._id
      }
    })
  }


  editeQuentity(id: string, count: number) {
    this._Subscription = this._CartService.updateCartQuantity(id, count).subscribe({
      next: (res) => {
        this.count = count
        this._allProductsCart = res.data.products;
        this._ToastrService.success(res.status)
      }
    })
  }

  RemoveProduct(id: string) {
    this._Subscription = this._CartService.removeSpicficeProduct(id).subscribe({
      next: (res) => {
        this._allProductsCart = res.data.products;
        this._ToastrService.success(res.status)
        this._CartService.cartNumber.set(res.numOfCartItems)
      },
    })
  }

  clearCart() {
    this._Subscription = this._CartService.deleteUserCart().subscribe({
      next: (res) => {
        if (res.message == "success") {
          this._allProductsCart = [];
          this._CartService.cartNumber.set(0)

        }

      }
    })
  }

  checkout() {
    console.log(this._cartId);
    this._Router.navigate(["/checkout", this._cartId])
  }

  ngOnDestroy(): void {
    this._Subscription?.unsubscribe()
  }
}

