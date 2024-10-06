import { Subscription } from 'rxjs';
import { BrandsService } from './../../sheard/services/brands/brands.service';
import { Component, inject } from '@angular/core';
import { Ibrand } from '../../sheard/interFaces/ibrand';
import { IphonsService } from '../../sheard/services/localdata/iphonebrand/iphons.service';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {

  _AllIphone: Ibrand[] = []
  _allBrands: Ibrand[] = []
  _Subscription !: Subscription
  private readonly _IphonsService = inject(IphonsService)

  private readonly _BrandsService = inject(BrandsService)

  ngOnInit(): void {

    this._Subscription = this._BrandsService.getAllBrands().subscribe({
      next: (res) => {
        this._allBrands = res.data
      }
    })

    this._IphonsService.getallIphone().subscribe({
      next: (res) => {
        this._AllIphone = res.iphone
      }
    })

  }


  ngOnDestroy(): void {
    this._Subscription?.unsubscribe()
  }
}
