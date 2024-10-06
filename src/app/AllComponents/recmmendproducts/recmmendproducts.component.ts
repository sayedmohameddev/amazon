import { RecommendproductsService } from './../../sheard/services/localdata/perfumes/recommendproducts.service';
import { Component, inject } from '@angular/core';
import { LinearsliderComponent } from "../additionsComponents/Linearslider/linearslider/linearslider.component";

@Component({
  selector: 'app-recmmendproducts',
  standalone: true,
  imports: [LinearsliderComponent],
  templateUrl: './recmmendproducts.component.html',
  styleUrl: './recmmendproducts.component.scss'
})
export class RecmmendproductsComponent {

  allRecommendProducts !: any[]

  private readonly _RecommendproductsService = inject(RecommendproductsService)

  ngOnInit(): void {
    this._RecommendproductsService.getRecommendeProduct().subscribe({
      next: (res) => {
        console.log(res);
        this.allRecommendProducts = res.perfumes
      }
    })
  }
}
