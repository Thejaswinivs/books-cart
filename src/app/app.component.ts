import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksCartModel } from './books-cart.model';
import { CommonService } from './DAL/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private title: string = 'app';

  private cartCount: number = 0;

  constructor(private _router: Router, private _commonService: CommonService) {}

  ngOnInit() {
    this._commonService.addedCartToListSubject.subscribe((book: BooksCartModel.BooksDetails)=>{
      this._commonService.setAddedCartList = book;

      this.cartCount = this._commonService.getAddedCartList.length;
    })
  }

  gotoShoppingcart() {
    this._router.navigate(['viewcart'])
  }

  gotoProfile() {
    this._router.navigate(['profile'])
  }

  gotoSignin() {
    this._router.navigate(['login']);
  }
}
