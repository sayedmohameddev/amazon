import { Component, inject, NgModule } from '@angular/core';
import { CategoriesService } from '../../sheard/services/categries/categories.service';
import { icategories } from '../../sheard/interFaces/icategories';
import { RouterLink } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CategoriesoffersService } from '../../sheard/services/localdata/categoriesOffers/categoriesoffers.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterLink, FormsModule, CarouselModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {


  _sliderImage !: any[]
  _categoriseOffers !: any[]
  allCategories !: icategories[]
  private readonly _CategoriesService = inject(CategoriesService)
  private readonly _CategoriesoffersService = inject(CategoriesoffersService)

  ngOnInit(): void {
    this._CategoriesoffersService.getallCategoriseOffers().subscribe({
      next: (res) => {
        this._categoriseOffers = res.CategoriesOffers;
        this._sliderImage = res.slidercategoris
      }


    })


    this._CategoriesService.getAllCategries().subscribe({
      next: (res) => {
        this.allCategories = res.data

      }
    })




  }


  customOptionsHomeSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    rtl: true,
    autoplayHoverPause: true,
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
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

}
