import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { BooksCartModel } from '../books-cart.model';

@Injectable()
export class CommonService {

  constructor() { }

  public addedCartToListSubject: Subject<BooksCartModel.BooksDetails> = new Subject<BooksCartModel.BooksDetails>();

  public addedCartList: BooksCartModel.BooksDetails[] = new Array<BooksCartModel.BooksDetails>();

  set setAddedCartList(book: BooksCartModel.BooksDetails) {
    this.addedCartList.push(book);
  }

  get getAddedCartList() {
    return this.addedCartList;
  }

}
