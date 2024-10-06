import { Component, inject } from '@angular/core';
import { WishlistService } from '../../sheard/services/wishlist/wishlist.service';
import { iwishList } from '../../sheard/interFaces/iwishlist';
import { RecmmendproductsComponent } from "../recmmendproducts/recmmendproducts.component";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [RecmmendproductsComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss',

})
export class WishlistComponent {

  _Subscription !: Subscription
  alllProductsWishlist !: iwishList[]
  private readonly _WishlistService = inject(WishlistService)


  ngOnInit(): void {
    this._Subscription = this._WishlistService.Getloggeduserwishlist().subscribe({
      next: (res) => this.alllProductsWishlist = res.data
    })
  }


  removeProductWishlist(id: string) {
    this._WishlistService.Removeproductfromwishlist(id).subscribe({
      next: (res) => {
        this._WishlistService.Getloggeduserwishlist().subscribe({
          next: (res) => this.alllProductsWishlist = res.data
        })
      }
    })
  }

  ngOnDestroy(): void {
    this._Subscription?.unsubscribe()
  }


}
