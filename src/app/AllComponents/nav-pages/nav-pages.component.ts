import { WishlistService } from './../../sheard/services/wishlist/wishlist.service';
import { CartService } from './../../sheard/services/cart/cart.service';
import { AuthenticationService } from './../../sheard/services/Authentication/authentication.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FlowbiteService } from './../../sheard/services/Flowbite/flowbite.service';
import { Component, computed, Inject, inject, Signal } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { _myTranslateService } from '../../sheard/services/translate/translate.service';

@Component({
  selector: 'app-nav-pages',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './nav-pages.component.html',
  styleUrl: './nav-pages.component.scss'
})
export class NavPagesComponent {


  private readonly _myTranslateService = inject(_myTranslateService)
  readonly _AuthenticationService = inject(AuthenticationService)
  readonly _CartService = inject(CartService)
  readonly _WishlistService = inject(WishlistService)


  cartNumber: Signal<number> = computed(() => this._CartService.cartNumber())
  countWishlist: Signal<number> = computed(() => this._WishlistService._countWishlist())

  constructor(private _FlowbiteService: FlowbiteService, private _Router: Router) {
    this._FlowbiteService.loadFlowbite((p) => {

    })
  }

  ngOnInit(): void {

    this._CartService.getAllproductInCart().subscribe({
      next: (res) => this._CartService.cartNumber.set(res.numOfCartItems)
    })


    this._WishlistService.Getloggeduserwishlist().subscribe({
      next: (res) => this._WishlistService._countWishlist.set(res.data.length)
    })

  }


  changeLang(lang: string) { this._myTranslateService.changLangTranslate(lang) }


  openprofile() {

    this._Router.navigate(['/profile'])
  }

}
