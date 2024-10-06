import { Subscription } from 'rxjs';
import { Component, inject } from '@angular/core';
import { ProductsService } from '../../sheard/services/products/products.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Iproduct } from '../../sheard/interFaces/iproduct';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-product-detils',
  standalone: true,
  imports: [CarouselModule, RouterLink],
  templateUrl: './product-detils.component.html',
  styleUrl: './product-detils.component.scss'
})
export class ProductDetilsComponent {

  _SpecificCategoies: Iproduct | null = null
  _Subscription !: Subscription
  private readonly _ActivatedRoute = inject(ActivatedRoute)
  private readonly _ProductsService = inject(ProductsService)





  customOptionsDeitlse: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    autoplay: true,
    autoplayTimeout: 2000,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: false
  }


  ngOnInit(): void {

    this._ActivatedRoute.paramMap.subscribe((p) => {
      let id = (p.get("id"));

      this._Subscription = this._ProductsService.getSpecificProducts(id!).subscribe({
        next: (res) => {
          this._SpecificCategoies = res.data
        }, error: (err) => {
          console.log(err);
        }
      })


    })
  }
}
