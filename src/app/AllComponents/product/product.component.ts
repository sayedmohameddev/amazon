import { CartService } from './../../sheard/services/cart/cart.service';
import { Subscription } from 'rxjs';
import { Component, inject, input } from '@angular/core';
import { ProductsService } from '../../sheard/services/products/products.service';
import { Iproduct } from '../../sheard/interFaces/iproduct';
import { RouterLink } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { SearchPipe } from '../../sheard/pipes/search/search.pipe';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../../sheard/services/wishlist/wishlist.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink, FormsModule, SearchPipe, TranslateModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {


  word: string = ""
  _Subscription !: Subscription
  _allProuducts: Iproduct[] = []

  private readonly _ToastrService = inject(ToastrService)
  private readonly _CartService = inject(CartService)
  private readonly _ProductsService = inject(ProductsService)
  private readonly _WishlistService = inject(WishlistService)
  ngOnInit(): void {
    this._ProductsService.getAllProducts().subscribe({
      next: (res) => {
        this._allProuducts = res.data
      }
    })
  }


  addToCart(id: string) {
    this._CartService.addToCart(id).subscribe({
      next: (res) => {
        this._ToastrService.success(res.message)
      }
    })
  }

  addToWishlist(id: string) {
    this._WishlistService.Addproducttowishlist(id).subscribe({
      next: (res) => {
        if (res.status == "success") {
          this._ToastrService.success(res.message);
          this._WishlistService._countWishlist.set(res.data.length)
        }
      }
    })

  }


}
