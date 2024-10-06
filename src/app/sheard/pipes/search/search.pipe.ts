import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(products: any[], word: string): any[] {
    return products.filter((item) => item.title.toLocaleLowerCase().includes(word.toLocaleLowerCase()));
  }

}
