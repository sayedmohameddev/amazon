import { AmzounProductInreface, sliderHome } from './../../sheard/interFaces/IamzounProducts';
import { CategoriesService } from './../../sheard/services/categries/categories.service';
import { ProductsService } from './../../sheard/services/products/products.service';
import { Component, inject } from '@angular/core';
import { Iproduct } from '../../sheard/interFaces/iproduct';
import { Subscription } from 'rxjs';
import { icategories } from '../../sheard/interFaces/icategories';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CartService } from '../../sheard/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../../sheard/services/wishlist/wishlist.service';
import { HttpClientModule } from '@angular/common/http';
import { LocaldataService } from '../../sheard/services/localdata/localdata.service';
import { LinearsliderComponent } from "../additionsComponents/Linearslider/linearslider/linearslider.component";
import { BrandsComponent } from '../brands/brands.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, RouterLink, HttpClientModule, LinearsliderComponent, BrandsComponent, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

})
export class HomeComponent {

  constructor() { }
  _Subscription !: Subscription
  _Schooloffers: sliderHome[] = []
  _sliderImagesHome: sliderHome[] = []
  allPoducts: Iproduct[] = []
  allCategories: icategories[] = []

  _allCategoiesLogo: AmzounProductInreface[] = []

  private readonly _LocaldataService = inject(LocaldataService)
  private readonly _WishlistService = inject(WishlistService)
  private readonly _ToastrService = inject(ToastrService)
  private readonly _CartService = inject(CartService)
  private readonly _ProductsService = inject(ProductsService)
  private readonly _CategoriesService = inject(CategoriesService)

  customOptionsHomeSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    rtl: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }




  ngOnInit(): void {
    this._Subscription = this._LocaldataService.getsliderCategoriesLogo().subscribe({
      next: (res) => this._allCategoiesLogo = res.sliderCategoriesLogo
    })

    this._Subscription = this._LocaldataService.getImagesHomeSlider().subscribe({
      next: (res) => this._sliderImagesHome = res.sliderImages
    })

    this._Subscription = this._LocaldataService.getschoolOffersData().subscribe({
      next: (res) => this._Schooloffers = res.schoolOffers
    })

    // ========== subscripe all products 
    this._Subscription = this._CategoriesService.getAllCategries().subscribe({
      next: (res) => {
        this.allCategories = res.data
      }
    })

    // ========== subscripe all products 
    this._Subscription = this._ProductsService.getAllProducts().subscribe({
      next: (res) => {
        this.allPoducts = res.data
      }
    })
  }


  addToCart(id: string) {
    this._CartService.addToCart(id).subscribe({
      next: (res) => {
        this._ToastrService.success(res.message)
        this._CartService.cartNumber.set(res.numOfCartItems)
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


  ngOnDestroy(): void {
    this._Subscription?.unsubscribe()
  }
}


