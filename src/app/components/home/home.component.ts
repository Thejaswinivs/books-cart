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

  private booksDetails: BooksCartModel.BooksDetails[] = new Array<BooksCartModel.BooksDetails>();
  private searchArg: string = '';

  constructor(private _remoteCallService: RemotecallService, private _commonService: CommonService) { }

  ngOnInit() {
    this.getBooksDetails();
    this.searchSubjectEvent();
  }

  searchSubjectEvent() {
    this._commonService.searchSubject.subscribe((str: string) => {
      this.searchArg = str;
    })
  }

  getBooksDetails() {
    let url = 'http://localhost:3000/books';
    
    this._remoteCallService.executeHttpClientGET(url).subscribe((response: BooksCartModel.BooksDetails[])=> {
      this.booksDetails = response;
    })
  }

  addTocart(book: BooksCartModel.BooksDetails) {
    this._commonService.addedCartToListSubject.next(book);
  }

}
