import { Component, inject, Input } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { AmzounProductInreface } from '../../../../sheard/interFaces/IamzounProducts';
import { LocaldataService } from '../../../../sheard/services/localdata/localdata.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-linearslider',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './linearslider.component.html',
  styleUrl: './linearslider.component.scss'
})
export class LinearsliderComponent {

  _Subscription !: Subscription

  @Input() allrecommended: any[] = []
  private readonly _LocaldataService = inject(LocaldataService)
  _allCategoiesLogo: AmzounProductInreface[] = []

  ngOnInit(): void {
    this._Subscription = this._LocaldataService.getsliderCategoriesLogo().subscribe({
      next: (res) => this._allCategoiesLogo = res.sliderCategoriesLogo
    })

  }

  ngOnDestroy(): void {
    this._Subscription?.unsubscribe()
  }

  customOptionsCat: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    rtl: true,
    autoplayHoverPause: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 6
      },
      940: {
        items: 11
      }
    },
    nav: false
  }


}
