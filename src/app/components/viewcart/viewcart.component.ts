import { Component, OnInit } from '@angular/core';
import { BooksCartModel } from '../../books-cart.model';
import { CommonService } from '../../DAL/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.scss']
})
export class ViewcartComponent implements OnInit {

  private cartBooksDetails: BooksCartModel.BooksDetails[] = new Array<BooksCartModel.BooksDetails>();

  constructor(private _commonService: CommonService, private _router: Router) { }

  ngOnInit() {
    this.cartBooksDetails = this._commonService.getAddedCartList;
  }


  cancel(book: BooksCartModel.BooksDetails){}

  checkoutProduct(book: BooksCartModel.BooksDetails) {}

  gotoHome() {
    this._router.navigate(['home']);
  }

}
