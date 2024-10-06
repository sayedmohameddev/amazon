import { Component, inject } from '@angular/core';
import { ClothesService } from '../../sheard/services/localdata/clothes/clothes.service';
import { Ibrand } from '../../sheard/interFaces/ibrand';

@Component({
  selector: 'app-clothes',
  standalone: true,
  imports: [],
  templateUrl: './clothes.component.html',
  styleUrl: './clothes.component.scss'
})
export class ClothesComponent {

  private readonly _ClothesService = inject(ClothesService)


  allClothes: Ibrand[] = []
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._ClothesService.getAllClothes().subscribe({
      next: (res) => {
        this.allClothes = res.clothBrand
        console.log(this.allClothes);
      }
    })
  }
}
