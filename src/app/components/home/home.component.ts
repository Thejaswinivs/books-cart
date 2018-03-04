import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BooksCartModel } from '../../books-cart.model';
import { RemotecallService } from '../../DAL/remotecall.service';

import { Observable } from 'rxjs';
import { CommonService } from '../../DAL/common.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private booksDetails: Observable<BooksCartModel.BooksDetails[]>;
  constructor(private _remoteCallService: RemotecallService, private _commonService: CommonService) { }

  ngOnInit() {
    this.getBooksDetails();
  }

  getBooksDetails() {
    let url = 'http://localhost:3000/books';

    console.log("inital BooksDetails... ", this.booksDetails);

    this.booksDetails = this._remoteCallService.executeHttpClientGET(url);

    console.log("After Booksdetails...", this.booksDetails);

  }

  addTocart(book: BooksCartModel.BooksDetails) {
    this._commonService.addedCartToListSubject.next(book);
  }

}
