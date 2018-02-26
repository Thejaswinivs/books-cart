import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BooksCartModel } from '../../books-cart.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private booksDetails: Array<BooksCartModel.BooksDetails> = new Array<BooksCartModel.BooksDetails>();

  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {
    this.getBooksDetails();
  }

  getBooksDetails() {
    let url = 'https://raw.githubusercontent.com/tamingtext/book/master/apache-solr/example/exampledocs/books.json';
    this._httpClient.get(url).subscribe((response: any) => {
      this.booksDetails = response;
    })
  }

}
