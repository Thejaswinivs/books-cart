import { Pipe, PipeTransform } from '@angular/core';
import { BooksCartModel } from '../books-cart.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: BooksCartModel.BooksDetails[], args?: string): any {
    // return value.filter((item: BooksCartModel.BooksDetails)=> {
    //   return item.name.toLowerCase().includes(args.toLowerCase());
    // })

    return  value.filter(item => 
      Object.keys(item).some(k => item[k] != null && 
      item[k].toString().toLowerCase()
      .includes(args.toLowerCase()))
      ); 
  }

}
